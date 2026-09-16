import { useEffect, useRef, useState } from "react";
import { Button, Icon, Use } from "./ui.jsx";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Expanding accordion (home "three parts") ----------
   items: [{ icon, label, title, body: ReactNode, button: { to, text } }] */
export function Accordion({ items, interval = 6500 }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return;
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [auto, interval, items.length]);

  const pick = (i) => { setAuto(false); setActive(i); };
  const canHover = () => window.matchMedia("(hover: hover)").matches;

  return (
    <div className="accordion reveal">
      {items.map((it, i) => {
        const on = i === active;
        return (
          <div
            key={it.label}
            className={`acc${on ? " is-active" : ""}`}
            tabIndex={0}
            role="button"
            aria-expanded={on}
            onClick={() => pick(i)}
            onMouseEnter={() => canHover() && pick(i)}
            onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && e.target === e.currentTarget) { e.preventDefault(); pick(i); } }}
          >
            <span className="acc__icon"><Icon name={it.icon} /></span>
            <span className="acc__num">Part {i + 1}</span>
            <span className="acc__label">{it.label}</span>
            <div className="acc__body">
              <h3>{it.title}</h3>
              {it.body}
              {it.button && <Button to={it.button.to}>{it.button.text}</Button>}
            </div>
            <span className="acc__go"><Use id="arrow-ne" /></span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- FAQ ---------- items: [[question, answer]] */
export function Faq({ items, firstOpen = true }) {
  const [open, setOpen] = useState(firstOpen ? 0 : -1);
  return (
    <div>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div className={`qa${isOpen ? " open" : ""}`} key={q}>
            <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              {q}<span className="qa__plus" aria-hidden="true" />
            </button>
            <div className="qa__a"><div><p>{a}</p></div></div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Marquee ---------- */
export function Marquee({ items, label }) {
  return (
    <div className="marquee" aria-label={label}>
      <div className="marquee__track">
        {[...items, ...items].map((t, i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= items.length || undefined}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Four phases that light up in sequence ---------- items: [[title, text]] */
export function Phases({ items }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) { setLit(items.length); return; }
    const timers = items.map((_, i) => setTimeout(() => setLit(i + 1), 300 + i * 600));
    return () => timers.forEach(clearTimeout);
  }, [inView, items]);

  return (
    <ol className={`clean phases${inView ? " is-in" : ""}`} ref={ref}>
      <span className="phases__line" aria-hidden="true"><i /></span>
      {items.map(([t, d], i) => (
        <li className={`phase${i < lit ? " is-lit" : ""}`} key={t}>
          <span className="phase__n">{i + 1}</span><h3>{t}</h3><p>{d}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Tabs ---------- tabs: [{ id, label, content }] */
export function Tabs({ tabs, label }) {
  const [active, setActive] = useState(tabs[0].id);
  const refs = useRef({});
  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    setActive(next.id);
    refs.current[next.id]?.focus();
  };
  return (
    <div>
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id} ref={(el) => (refs.current[t.id] = el)} role="tab" id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`} aria-selected={active === t.id} tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)} onKeyDown={(e) => onKey(e, i)}
          >{t.label}</button>
        ))}
      </div>
      {tabs.map((t) => (
        <div className="tabpanel" role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} key={t.id}>
          {t.content}
        </div>
      ))}
    </div>
  );
}

/* ---------- Sticky in-page sub navigation ---------- links: [[id, label]] */
export function SubNav({ links }) {
  const [current, setCurrent] = useState(links[0][0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id));
    }, { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [links]);
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <nav className="subnav" aria-label="On this page">
      <div className="wrap">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={current === id ? "is-active" : undefined} onClick={(e) => go(e, id)}>{label}</a>
        ))}
      </div>
    </nav>
  );
}

/* Scroll to a section on the same page (works with both hash and browser routers) */
export function ScrollLink({ target, className = "btn btn--ghost", children }) {
  const go = (e) => { e.preventDefault(); document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }); };
  return <a href={`#${target}`} className={className} onClick={go}>{children}</a>;
}

export function ScrollButton({ target, light = false, children }) {
  const go = () => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  return <Button light={light} onClick={go}>{children}</Button>;
}

/* ---------- Demo form (no backend yet) ----------
   TODO: replace handleSubmit with a real endpoint (Formspree, Google Forms, Cloud Function…) */
export function DemoForm({ title, intro, submitLabel, children }) {
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Demo form: nothing was sent yet. Please email info@argomind.ai for now.");
    e.currentTarget.reset();
  };
  return (
    <form className="form reveal" onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <p>{intro}</p>
      <div className="fields">{children}</div>
      <div className="form__foot">
        <Button type="submit">{submitLabel}</Button>
        <span className="form__status" role="status">{status}</span>
      </div>
    </form>
  );
}

export const Field = ({ id, label, optional, full, children }) => (
  <div className={`field${full ? " field--full" : ""}`}>
    <label htmlFor={id}>{label}{optional && <span className="muted"> ({optional})</span>}</label>
    {children}
  </div>
);

/* ---------- Argo Labs demo editor ----------
   JavaScript runs for real inside a sandboxed iframe; SQL shows a fixed sample result. */
const LAB_SAMPLES = {
  javascript: `// Group orders by status and total them
const orders = [
  { id: 1, status: "paid", amount: 120 },
  { id: 2, status: "refunded", amount: 40 },
  { id: 3, status: "paid", amount: 75.5 },
  { id: 4, status: "pending", amount: 60 },
];

const totals = orders.reduce((acc, o) => {
  acc[o.status] = (acc[o.status] || 0) + o.amount;
  return acc;
}, {});

console.log("Totals by status:", totals);
console.log("Paid revenue:", totals.paid.toFixed(2));`,
  sql: `-- Try it: edit and press Run
SELECT status, COUNT(*) AS orders, SUM(amount) AS total
FROM orders
GROUP BY status
ORDER BY total DESC;`,
};

const SQL_RESULT = `status    | orders | total
----------+--------+-------
paid      | 2      | 195.50
pending   | 1      | 60.00
refunded  | 1      | 40.00

(3 rows)`;

export function ArgoLab() {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(LAB_SAMPLES.javascript);
  const [lines, setLines] = useState([{ kind: "dim", text: "Press Run to see output" }]);
  const cleanup = useRef(() => {});

  useEffect(() => () => cleanup.current(), []);

  const run = () => {
    cleanup.current();
    if (lang === "sql") {
      setLines([{ kind: "out", text: SQL_RESULT }, { kind: "dim", text: "Sample table · SQL runs against a preloaded database in Argo Labs" }]);
      return;
    }
    setLines([]);
    const t0 = performance.now();
    const id = `run${Date.now()}`;
    const frame = document.createElement("iframe");
    frame.setAttribute("sandbox", "allow-scripts");
    frame.style.display = "none";
    const add = (kind, text) => setLines((l) => [...l, { kind, text }]);
    const onMessage = (e) => {
      if (!e.data || e.data.id !== id) return;
      if (e.data.type === "log") add("out", e.data.text);
      if (e.data.type === "error") add("err", e.data.text);
      if (e.data.type === "done") { add("dim", `✓ Finished in ${Math.round(performance.now() - t0)} ms`); cleanup.current(); }
    };
    const timeout = setTimeout(() => { add("err", "Stopped: took longer than 3 seconds"); cleanup.current(); }, 3000);
    cleanup.current = () => { clearTimeout(timeout); window.removeEventListener("message", onMessage); frame.remove(); cleanup.current = () => {}; };
    window.addEventListener("message", onMessage);
    const src = code.replace(/<\/script/gi, "<\\/script");
    frame.srcdoc = `<script>
      const send=(type,text)=>parent.postMessage({id:${JSON.stringify(id)},type,text},"*");
      const fmt=a=>a.map(x=>typeof x==="object"?JSON.stringify(x,null,2):String(x)).join(" ");
      console.log=(...a)=>send("log",fmt(a)); console.error=(...a)=>send("error",fmt(a));
      try{ ${src}\n }catch(e){ send("error", e.name+": "+e.message); }
      send("done","");
    <\/script>`;
    document.body.appendChild(frame);
  };

  return (
    <div className="lab reveal">
      <div className="lab__bar">
        <label htmlFor="lab-lang">Language</label>
        <select id="lab-lang" value={lang} onChange={(e) => { setLang(e.target.value); setCode(LAB_SAMPLES[e.target.value]); setLines([{ kind: "dim", text: "Press Run to see output" }]); }}>
          <option value="javascript">JavaScript</option>
          <option value="sql">SQL (sample table)</option>
        </select>
        <button className="lab__run" type="button" onClick={run}>▶ Run</button>
      </div>
      <div className="lab__grid">
        <textarea
          spellCheck={false} aria-label="Code editor" value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(); } }}
        />
        <div className="lab__out" aria-live="polite" aria-label="Console output">
          {lines.map((l, i) => <span key={i} className={l.kind === "out" ? undefined : l.kind}>{l.text}{"\n"}</span>)}
        </div>
      </div>
      <p className="lab__note">This public demo supports JavaScript and a sample SQL query. Inside the platform, each track opens its own pre-configured environment.</p>
    </div>
  );
}
