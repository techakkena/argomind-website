import { Children, cloneElement, isValidElement } from "react";
import { Link } from "react-router-dom";

/* ---------- Icons ---------- */
const ICONS = {
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" /></>,
  code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16" />,
  brief: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8.5 7V5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 5v2M3 12.5h18" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>,
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.8 3.4-6 6.5-6s5.7 2.2 6.5 6" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c1.8.8 3 2.8 3.5 5.7" /></>,
  shield: <><path d="M12 3 20 6v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6z" /><path d="m9 12 2 2 4-4" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.5A3.8 3.8 0 0 1 17.5 18z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  download: <path d="M12 4v11M7 10l5 5 5-5M4 20h16" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>,
  map: <><path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 7z" /><path d="M9 4v13M15 7v12.5" /></>,
  db: <><ellipse cx="12" cy="5.5" rx="8" ry="2.5" /><path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.2-1.7-.4-1.1.3-2.3 1.5-2.3H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></>,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  flag: <path d="M5 21V4M5 4h11l-2 4 2 4H5" />,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></>,
  bug: <><rect x="7" y="8" width="10" height="12" rx="5" /><path d="M12 8V5M9 5.5 8 3.5M15 5.5l1-2M3 13h4M17 13h4M4 19l3-2M20 19l-3-2M4 7l3 2M20 7l-3 2" /></>,
  rocket: <><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 15l-3-3c1-4 5-9 12-9 0 7-5 11-9 12z" /><circle cx="14.5" cy="9.5" r="1.5" /></>,
  grad: <><path d="M3 6.5 12 3l9 3.5-9 3.5z" /><path d="M6.5 8.5v5c0 1.8 2.5 3.5 5.5 3.5s5.5-1.7 5.5-3.5v-5M21 6.5V12" /></>,
};

export function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* Small sprite icons (defined once in <SvgSprite />) */
export const Use = ({ id, style }) => <svg style={style} aria-hidden="true"><use href={`#${id}`} /></svg>;

/* ---------- Links & buttons ---------- */
const isExternal = (to) => /^(https?:|mailto:|tel:)/.test(to);

export function SmartLink({ to, children, ...rest }) {
  if (isExternal(to)) return <a href={to} {...rest}>{children}</a>;
  return <Link to={to} {...rest}>{children}</Link>;
}

export function Button({ to, light = false, children, type, onClick }) {
  const disc = <span className="disc"><Use id="arrow" style={light ? { color: "#fff" } : undefined} /></span>;
  const cls = light ? "btn btn--light" : "btn";
  if (!to) return <button className={cls} type={type || "button"} onClick={onClick}>{disc}{children}</button>;
  return <SmartLink className={cls} to={to}>{disc}{children}</SmartLink>;
}

export const GhostLink = ({ to, children }) => (
  <SmartLink className="btn btn--ghost" to={to}><span className="underline">{children}</span></SmartLink>
);

export const Tag = ({ children }) => <span className="tag">{children}</span>;

/* ---------- Headings with word-by-word reveal ---------- */
function splitNode(node, key = "k") {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) =>
      /^\s+$/.test(part) || !part ? part : <span className="w" key={`${key}-${i}`}>{part}</span>
    );
  }
  if (isValidElement(node)) {
    return cloneElement(node, { key }, Children.map(node.props.children, (c, i) => splitNode(c, `${key}-${i}`)));
  }
  return node;
}

export function Split({ as: Tag = "h2", children, className = "", ...rest }) {
  const parts = Children.map(children, (c, i) => splitNode(c, `s${i}`));
  return <Tag className={`split ${className}`.trim()} {...rest}>{parts}</Tag>;
}

/* ---------- Layout blocks ---------- */
export function Section({ id, className = "", children }) {
  return (
    <section className={`section ${className}`.trim()} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Section heading. variant: undefined (title | text | button), "solo", or "center" */
export function Head({ eyebrow, title, text, button, variant }) {
  return (
    <div className={`head${variant ? ` head--${variant}` : ""}`}>
      <div><Tag>{eyebrow}</Tag><Split>{title}</Split></div>
      {text ? <p>{text}</p> : !variant && <span />}
      {button || (!variant && <span />)}
    </div>
  );
}

export function Checks({ items, cols = false }) {
  return (
    <ul className={`clean checks${cols ? " checks--cols" : ""}`}>
      {items.map((it, i) => <li key={i}><span>{it}</span></li>)}
    </ul>
  );
}

/** items: [{ icon, title, text, extra? }] */
export function Cards({ items, cols = 3, numbered = false }) {
  const cls = { 2: "cards cards--2", 3: "cards", 4: "cards cards--4" }[cols];
  return (
    <div className={cls}>
      {items.map((it, i) => (
        <div className="card reveal" key={it.title} style={{ transitionDelay: `${((i % cols) * 0.06).toFixed(2)}s` }}>
          {numbered && <span className="card__n">{String(i + 1).padStart(2, "0")}</span>}
          <div className="card__icon"><Icon name={it.icon} /></div>
          <h3>{it.title}</h3>
          {it.text && <p>{it.text}</p>}
          {it.extra}
        </div>
      ))}
    </div>
  );
}

export function DataTable({ headers, rows }) {
  return (
    <div className="table-wrap reveal">
      <table className="t">
        <thead><tr>{headers.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export function Flow({ items, center = false }) {
  return (
    <div className={`flow${center ? " flow--center" : ""}`}>
      {items.map((it, i) => (
        <span key={it} style={{ display: "contents" }}>
          {i > 0 && <i aria-hidden="true" />}
          <span>{it}</span>
        </span>
      ))}
    </div>
  );
}

/** items: [[title, description]] */
export function Steps({ items, cols = 4 }) {
  return (
    <ol className="clean steps" style={{ "--cols": cols }}>
      {items.map(([t, d], i) => (
        <li className="step reveal" key={t} style={{ transitionDelay: `${((i % cols) * 0.06).toFixed(2)}s` }}>
          <span className="step__n">{i + 1}</span><h3>{t}</h3><p>{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Callout({ children, small, blue = false }) {
  return (
    <div className={`callout${blue ? " callout--blue" : ""} reveal`}>
      <svg className="bg" viewBox="0 0 320 320" aria-hidden="true"><circle cx="160" cy="160" r="150" strokeWidth="2" /><circle cx="160" cy="160" r="100" strokeWidth="34" /></svg>
      <p>{children}</p>
      {small && <small>{small}</small>}
    </div>
  );
}

export function PageHero({ title, lead, crumb, eyebrow, actions, image }) {
  return (
    <section className="page-hero">
      {image && <div className="page-hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />}
      <svg className="page-hero__rings" viewBox="0 0 620 620" aria-hidden="true">
        <circle cx="310" cy="310" r="300" strokeWidth="2" /><circle cx="310" cy="310" r="210" strokeWidth="60" /><circle cx="310" cy="310" r="110" strokeWidth="2" />
      </svg>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span>{crumb}</span></nav>
        {eyebrow && <div className="on-dark" style={{ background: "none" }}><Tag>{eyebrow}</Tag></div>}
        <Split as="h1">{title}</Split>
        <p className="page-hero__lead">{lead}</p>
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
    </section>
  );
}

export function Band({ title, text, button, id }) {
  return (
    <section className="band" id={id}>
      <svg className="band__rings" viewBox="0 0 420 420" aria-hidden="true"><circle cx="210" cy="210" r="200" strokeWidth="2" /><circle cx="210" cy="210" r="140" strokeWidth="40" /></svg>
      <div className="wrap"><div><h2>{title}</h2><p>{text}</p></div>{button}</div>
    </section>
  );
}

/* "Learn more →" style inline link used inside cards */
export const CardLink = ({ to, children }) => (
  <SmartLink className="svc__link" style={{ color: "var(--blue)" }} to={to}>{children} <Use id="arrow" /></SmartLink>
);

export const Strong = ({ children }) => <strong style={{ color: "var(--ink)" }}>{children}</strong>;
