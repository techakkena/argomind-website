import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button, Use } from "./ui.jsx";

export const PLATFORM_LINKS = [
  { to: "/programs", title: "Programs", desc: "14 tracks, four phases each" },
  { to: "/argo-labs", title: "Argo Labs", desc: "Write and run code in your browser" },
  { to: "/ai-features", title: "AI Features", desc: "Mentor, mock interviews, match scoring" },
  { to: "/resume-builder", title: "Resume Builder", desc: "A resume built from your record" },
  { to: "/timesheet", title: "Timesheet", desc: "Tracked hours you can export" },
  { to: "/dashboard", title: "Dashboard", desc: "Your whole journey in one view" },
];

const MAIN_LINKS = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const CONTACT_EMAIL = "info@argomind.ai";

export function SvgSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="arrow" viewBox="0 0 16 16"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="arrow-ne" viewBox="0 0 16 16"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="check" viewBox="0 0 16 16"><path d="m3 8.5 3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="chev" viewBox="0 0 10 6"><path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></symbol>
      <symbol id="mark" viewBox="0 0 40 40"><rect width="40" height="40" rx="11" fill="#1560f5" /><path d="M11 29 20 10l9 19M15 22h10" stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></symbol>
    </svg>
  );
}

export const Logo = () => (
  <Link className="logo" to="/" aria-label="Argomind home"><svg><use href="#mark" /></svg>Argomind</Link>
);

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <span>First module free on every track — no card needed. <Link to="/programs">Browse tracks</Link></span>
        <div className="topbar__right">
          <span>AI support 24/7</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </div>
  );
}

function Header({ onHero }) {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [navTop, setNavTop] = useState(0);
  const platformActive = PLATFORM_LINKS.some((l) => l.to === pathname);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [pathname]);

  const toggleMenu = () => {
    setNavTop(headerRef.current.getBoundingClientRect().bottom);
    setMenuOpen((o) => !o);
  };

  const cls = ["header", stuck && "is-stuck", menuOpen && "menu-open", onHero && "on-hero"].filter(Boolean).join(" ");

  return (
    <header className={cls} ref={headerRef}>
      <div className="wrap">
        <Logo />
        <nav
          className={`nav${menuOpen ? " open" : ""}`}
          aria-label="Main"
          style={menuOpen ? { top: navTop, maxHeight: `calc(100vh - ${navTop}px)` } : undefined}
        >
          <NavLink to="/" end>Home</NavLink>
          <div className={`nav__drop${dropOpen ? " open" : ""}`}>
            <button aria-expanded={dropOpen} aria-haspopup="true" aria-current={platformActive ? "page" : undefined} onClick={() => setDropOpen((o) => !o)}>
              Platform <Use id="chev" />
            </button>
            <div className="nav__menu">
              {PLATFORM_LINKS.map((l) => (
                <Link key={l.to} to={l.to} aria-current={pathname === l.to ? "page" : undefined}>
                  <strong>{l.title}</strong><span>{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          {MAIN_LINKS.map((l) => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
        </nav>
        <div className="header__cta">
          {/* TODO: point to the app's login URL when it exists */}
          <button className="header__login" type="button">Log in</button>
          <Button to="/programs">Start free</Button>
          <button className="burger" aria-label="Menu" aria-expanded={menuOpen} onClick={toggleMenu}><span /><span /><span /></button>
        </div>
      </div>
    </header>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <>
      <form className="news" aria-label="Newsletter signup" onSubmit={(e) => { e.preventDefault(); setDone(true); e.currentTarget.reset(); }}>
        <input type="email" placeholder="Your email address" aria-label="Email address" required />
        <button type="submit" aria-label="Subscribe"><Use id="arrow" /></button>
      </form>
      {/* TODO: connect to a newsletter provider — this currently only shows a confirmation */}
      <p className="news__note" aria-live="polite">{done ? "Thanks — you're on the list." : "Unsubscribe anytime."}</p>
    </>
  );
}

function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="wrap">
          <h2>Start with the free module and judge it yourself</h2>
          <div className="actions">
            <Button to="/programs">Start free</Button>
            <Button to="/contact" light>Talk to us</Button>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer__grid">
          <div className="footer__about">
            <Logo />
            <p>Closing the gap between knowing and doing — training, real client projects and career tools on one record.</p>
            <a className="contact-line" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <h4>Platform</h4>
            <ul className="clean">
              {[PLATFORM_LINKS[0], { to: "/projects", title: "Projects" }, ...PLATFORM_LINKS.slice(1)].map((l) => (
                <li key={l.to}><Link to={l.to}>{l.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="clean">
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/support">Support &amp; FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get new articles by email</h4>
            <Newsletter />
          </div>
        </div>
        <div className="footer__bar">
          <div className="wrap">
            <span>© {new Date().getFullYear()} Argomind. All rights reserved.</span>
            {/* TODO: add privacy policy and terms pages */}
            <span><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy policy</a> &nbsp;·&nbsp; <a href="#terms" onClick={(e) => e.preventDefault()}>Terms</a></span>
          </div>
        </div>
      </footer>
    </>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button className={`to-top${show ? " show" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <Use id="arrow" style={{ transform: "rotate(-90deg)" }} />
    </button>
  );
}

function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!fine || reduce || !el) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const over = (e) => el.classList.toggle("is-hover", !!e.target.closest("a, button, .acc"));
    const tick = () => { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; el.style.transform = `translate(${cx}px, ${cy}px)`; raf = requestAnimationFrame(tick); };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, []);
  return <div className="cursor" ref={ref} aria-hidden="true" />;
}

/* Scroll to top (or to #hash) on navigation, and run the scroll-reveal observer for each page */
function ScrollEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const t = setTimeout(() => {
      const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo(0, 0);
    }, 30);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });
    const t = setTimeout(() => {
      document.querySelectorAll(".split").forEach((el) =>
        el.querySelectorAll(".w").forEach((w, i) => (w.style.transitionDelay = `${i * 55}ms`)));
      document.querySelectorAll(".reveal:not(.is-in), .split:not(.is-in), [data-observe]:not(.is-in)").forEach((el) => io.observe(el));
    }, 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);

  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const onHero = pathname !== "/";
  return (
    <>
      <SvgSprite />
      <ScrollEffects />
      <Topbar />
      <Header onHero={onHero} />
      <main><Outlet /></main>
      <Footer />
      <BackToTop />
      <Cursor />
    </>
  );
}

/* Sets <title> and meta description per page */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — Argomind` : "Argomind — From learning to being job-ready";
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);
}
