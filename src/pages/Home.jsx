import { Link } from "react-router-dom";
import { usePageMeta } from "../components/Layout.jsx";
import { Band, Button, Head, Split, Tag, Use } from "../components/ui.jsx";
import { Accordion, Faq, Marquee, Phases, ScrollLink } from "../components/interactive.jsx";
import { TRACK_NAMES } from "../data/tracks.js";
import aiSummit from "../assets/ai-summit.jpg";
import conferenceHall from "../assets/conference-hall.jpg";

const FOUR_THINGS = [
  {
    title: "Your work is attributed, not anonymized",
    text: "Your project record ties specific work to you by name, with dates and review sign-off. It holds up when someone checks.",
    icon: <><circle cx="24" cy="17" r="8" /><path d="M9 41c2-8 8-12 15-12s13 4 15 12" /><path d="m30 33 3 3 6-6" /></>,
  },
  {
    title: "Your hours are yours to keep",
    text: "Hours are tracked as you work, and you can export the records at any time — built correctly from day one, not reconstructed later.",
    icon: <><circle cx="24" cy="26" r="15" /><path d="M24 17v9l6 4M19 6h10M24 6v5" /></>,
  },
  {
    title: "Practice against what matters",
    text: "Paste the job description and practice technical and behavioral interviews built around it. Get scored on how you think.",
    icon: <><rect x="8" y="8" width="32" height="24" rx="3" /><path d="M16 40h16M24 32v8M15 18h10M15 24h18" /></>,
  },
  {
    title: "We stop you before you waste time",
    text: "If your match score is low, we show you the number and explain exactly why. We'd rather you prepare six more weeks and get the offer.",
    icon: <><path d="M24 6 40 12v11c0 10-7 17-16 19-9-2-16-9-16-19V12Z" /><path d="M24 17v9M24 31v.5" /></>,
  },
];

const THREE_PARTS = [
  {
    icon: "grad", label: "Learn it properly", title: "Learn it properly before you're asked to ship it",
    body: <>
      <p>Recorded lessons, written notes, references, graded assignments and knowledge checks in every track — from Java full stack and Python to Salesforce, SAP, Oracle, Workday and cloud platforms.</p>
      <p>An AI mentor works alongside the lessons and knows where you are. When your code breaks, it walks you through the problem instead of handing over the fix — because in an interview you'll need to explain how you got there. Learn at your own pace; your material never expires.</p>
    </>,
    button: { to: "/programs", text: "Browse tracks" },
  },
  {
    icon: "brief", label: "Real client projects", title: "Real clients, real tickets, real consequences",
    body: <>
      <p>You join a team and work like you would on the job. Tasks are assigned. Your code is reviewed by someone who can reject it. Daily meetings happen, and missing a deadline affects your teammates.</p>
      <p>Every hour is logged and every task is linked to you — what you received, what you delivered, when, and who approved it. This is also the hard part. Some people realize here that this career isn't for them, and it's better to find out in month three than in year two.</p>
    </>,
    button: { to: "/projects", text: "See how projects run" },
  },
  {
    icon: "search", label: "Apply with a real chance", title: "Apply where you have a real chance",
    body: <>
      <p>Openings from multiple sources are compiled into one list and rated against your completed courses and project record, so you see how well you match before you spend time applying. Filter by work authorization, including roles that offer sponsorship or accept OPT and CPT.</p>
      <p>The resume builder uses your recorded project history, interview practice is matched to the real job description, and the tracker keeps every application, follow-up and next step in one place.</p>
    </>,
    button: { to: "/ai-features", text: "See the career tools" },
  },
];

const PHASES = [
  ["Foundation", "Starts from zero — no prior background in the technology assumed."],
  ["Hands-on practice", "Assignments and code you write and run yourself in Argo Labs."],
  ["Real-time project", "Client work with assigned tasks, reviews, deadlines and tracked hours."],
  ["Interview & certification prep", "Mock interviews matched to real roles, and certification readiness."],
];

const SERVICES = [
  { for: "For clients", title: "IT Services", to: "/services#it-services", text: "Full stack, data, DevOps, cloud, enterprise platforms and AI/ML delivered by teams under experienced technical oversight — the real work behind our training." },
  { for: "For students", title: "Career Builders", to: "/services#career-builders", text: "Resume builder, job matching, AI mock interviews, application tracking and placement support — all running on the same experience record." },
  { for: "For employers", title: "Consultant Services", to: "/services#consultant-services", text: "Recruitment built around proof, not paperwork. Search candidates by skill and review live portfolios, coding scores, project history and interview practice." },
];

const FAQS = [
  ["Is job placement guaranteed?", "No. If someone promises you a job, be cautious — that promise usually isn't true, and it can put you in a role that isn't right for you. We offer training, real project experience, interview preparation and help finding real job openings. Your results depend on your effort, the job market and timing."],
  ["Are these real projects or simulations dressed up as real?", "They're real. You'll work on actual client projects with real responsibilities — this is the core of the program. You can request a client reference before enrolling and we'll provide one. We'd rather show proof than make claims."],
  ["Will employers accept this as experience?", "It depends on the employer. Some will count it as work experience; others will see it as strong portfolio work, and we can't guarantee how any individual employer will categorize it. What we can promise is that you'll be able to discuss your specific decisions and tasks in detail — something most candidates with only course experience struggle to do."],
  ["I've been burned by a training and placement program before. Why trust Argomind?", "You shouldn't just take our word for it. The work is real, your hour records belong to you and can be exported, the first module is free with no sales pressure, and we can connect you with a past student who has no connection to our marketing. If any of that turns out not to be true, walk away."],
  ["What support exists for OPT, CPT and H-1B candidates?", "Job listings can be filtered by work-authorization needs, including roles that offer sponsorship, and timesheets track your hours and activities automatically. We don't provide legal or immigration advice — for questions about your status, speak with a qualified immigration attorney."],
  ["Do I need a technical background?", "No. Every track starts with a Foundation phase that assumes no prior knowledge, and many of our students have switched careers from non-technical fields."],
  ["Can I do this while working full time?", "Yes — most of our students do. Coursework is on demand, and project schedules are flexible enough to fit around a full-time job."],
];

const Check = () => <span className="task__check"><Use id="check" style={{ color: "#fff" }} /></span>;

function ProjectRecord() {
  return (
    <div className="record" data-observe="">
      <div className="float-badge float-badge--b">
        <span className="dot"><Use id="check" style={{ color: "#fff" }} /></span>
        <span><b>Signed off</b>Reviewed by project lead</span>
      </div>
      <div className="record__card" role="img" aria-label="Example project record showing tracked hours, completed tasks and reviewer sign-off">
        <div className="record__head">
          <div className="record__who">
            <span className="avatar">PR</span>
            <span><strong>Project record</strong><span>Data Engineering · Client project</span></span>
          </div>
          <span className="verified">Verified</span>
        </div>
        <div className="record__hours">
          <b>128</b><span>hours<br />tracked</span>
          <span className="record__bar"><i /></span>
        </div>
        <div className="task"><Check /><span>Build ingestion job for order events<small>Approved in code review</small></span><em>14.5 h</em></div>
        <div className="task"><Check /><span>Airflow DAG for nightly warehouse load<small>Delivered on deadline</small></span><em>22 h</em></div>
        <div className="task"><span className="task__check task__check--open" /><span>Data quality checks and alerting<small>In review</small></span><em>9 h</em></div>
      </div>
      <div className="float-badge float-badge--a">
        <span className="dot"><Use id="arrow-ne" style={{ color: "#fff" }} /></span>
        <span><b>Export anytime</b>Your hours belong to you</span>
      </div>
    </div>
  );
}

function CodeSample() {
  return (
    <div className="editor reveal" aria-label="Example of the Argo Labs in-browser code editor">
      <div className="editor__bar"><i /><i /><i /><span>Argo Labs — orders_pipeline.py</span></div>
      <pre>
        <span className="c"># Hands-On Practice · Data Engineering</span>{"\n"}
        <span className="k">from</span> pyspark.sql <span className="k">import</span> functions <span className="k">as</span> F{"\n\n"}
        orders = spark.read.json(<span className="s">"s3://raw/orders/"</span>){"\n\n"}
        daily = (orders{"\n"}
        {"  "}.filter(F.col(<span className="s">"status"</span>) == <span className="s">"paid"</span>){"\n"}
        {"  "}.groupBy(F.to_date(<span className="s">"created_at"</span>).alias(<span className="s">"day"</span>)){"\n"}
        {"  "}.agg(F.sum(<span className="s">"amount"</span>).alias(<span className="s">"revenue"</span>))){"\n\n"}
        daily.write.mode(<span className="s">"overwrite"</span>).parquet(<span className="s">"s3://curated/daily/"</span>)
      </pre>
      <div className="editor__out">✓ Run complete · 3 stages · 1.8s</div>
    </div>
  );
}

function PostArt({ variant }) {
  if (variant === "flow") {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="200" fill="#081530" />
        <g fill="none" stroke="#1560f5" strokeWidth="2"><rect x="70" y="50" width="70" height="44" rx="6" /><rect x="180" y="50" width="70" height="44" rx="6" stroke="#8fb4ff" /><rect x="125" y="120" width="70" height="44" rx="6" /><path d="M140 72h40M105 94l40 26M215 94l-40 26" /></g>
        <circle cx="215" cy="72" r="6" fill="#8fb4ff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#1560f5" />
      <g fill="none" stroke="#fff" strokeWidth="2"><rect x="60" y="40" width="90" height="120" rx="8" /><rect x="170" y="40" width="90" height="120" rx="8" strokeDasharray="6 6" opacity=".7" /><path d="M76 66h58M76 82h40M76 98h52M76 114h34" /></g>
      <path d="m88 136 10 10 20-20" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const POSTS = [
  { cat: "Hiring trends", title: "AI hiring goes mainstream: what recruiters are actually screening for", text: "Recruiters are using AI across the pipeline — and growing more cautious about claims candidates can't back up.", image: conferenceHall, alt: "Audience watching a presentation in a large conference hall" },
  { cat: "Developer careers", title: "Agentic AI is rewriting the developer's job", text: "Less time on repetitive code, more on architecture, oversight and judgment calls — worth understanding before your next interview.", art: "flow" },
  { cat: "Career prep", title: "The real difference between a portfolio project and a tutorial clone", text: "What hiring managers spot instantly, and how to make sure your projects don't read as copies.", art: "doc" },
];

export default function Home() {
  usePageMeta(null, "Learn Java, Python, Salesforce, SAP, DevOps and more, then work on real client projects where every hour is tracked and every task is linked to your name.");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <svg className="hero__rings" viewBox="0 0 760 760" aria-hidden="true">
          <circle cx="380" cy="380" r="370" strokeWidth="2" />
          <circle cx="380" cy="380" r="270" strokeWidth="70" opacity=".55" />
          <circle cx="380" cy="380" r="150" strokeWidth="2" />
        </svg>
        <div className="wrap">
          <div>
            <Tag>Training, real client projects and hiring in one place</Tag>
            <Split as="h1">From learning to being <span className="accent">job-ready</span></Split>
            <p className="hero__sub">Anyone can sell you a certificate. We can prove you did the work.</p>
            <p className="hero__lead">Learn Java, Python, Salesforce, SAP, DevOps and more. Then work on real client projects where every hour is tracked and every task is linked to your name. You finish with training, a portfolio, a polished resume, and records an employer can check.</p>
            <div className="hero__actions">
              <Button to="/programs">Start free</Button>
              <ScrollLink target="how"><span className="underline">See how it works</span></ScrollLink>
            </div>
          </div>
          <ProjectRecord />
        </div>
      </section>

      {/* FOUR THINGS */}
      <section className="strip" aria-labelledby="four-title">
        <h2 id="four-title" className="visually-hidden">Four things we do that are difficult to fake</h2>
        <div className="wrap strip__grid">
          {FOUR_THINGS.map((f, i) => (
            <div className="strip__item reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={f.title}>
              <svg className="strip__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{f.icon}</svg>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / PROBLEM */}
      <section className="section about">
        <div className="wrap about__grid">
          <figure className="about__media reveal" style={{ margin: 0 }}>
            <img src={aiSummit} alt="A speaker presenting on stage to a large technology conference audience" loading="lazy" style={{ objectPosition: "48% center" }} />
            <figcaption><span className="outline">Knowledge</span> to proof</figcaption>
            <div className="spin-badge" aria-hidden="true">
              <svg className="ring" viewBox="0 0 132 132">
                <defs><path id="circ" d="M66,66 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" /></defs>
                <text><textPath href="#circ">LEARN • BUILD • PROVE • GROW •</textPath></text>
              </svg>
              <svg className="core"><use href="#mark" /></svg>
            </div>
          </figure>
          <div className="about__body">
            <Tag>Why Argomind exists</Tag>
            <Split>The problem isn't your skills. It's that nobody can confirm them.</Split>
            <p>A hiring manager can't tell if you actually finished a course or just bought the certificate. They can't verify a portfolio project built by following a tutorial. And plenty of applicants list experience that isn't real.</p>
            <p><strong>That doubt isn't about you — but you're the one who has to overcome it.</strong> Argomind starts you with structured lessons, then moves you onto a real client project with assigned tasks, code reviews and real deadlines. Every hour, every change and every completed task is tracked. By the time you finish, you don't have a claim. You have proof.</p>
            <div className="facts">
              <div className="fact"><b>14</b><span>Technology tracks employers are hiring for</span></div>
              <div className="fact"><b>1st</b><span>Module free on any track, no time limit</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PARTS */}
      <section className="section parts" id="how">
        <div className="wrap">
          <Head
            eyebrow="How it works"
            title="How the three parts work"
            text="Learn the technology, apply it on real client work, then go after roles where your record gives you a real chance."
            button={<Button to="/programs">Browse tracks</Button>}
          />
          <Accordion items={THREE_PARTS} />
        </div>
      </section>

      <Marquee items={TRACK_NAMES} label="Technology tracks" />

      {/* FOUR-PHASE PATH */}
      <section className="section path">
        <div className="wrap">
          <div className="path__grid">
            <CodeSample />
            <div>
              <Tag>One path in every track</Tag>
              <Split>From your first lesson to a job-ready portfolio</Split>
              <p className="path__intro">Every program follows the same four phases, so you never have to switch platforms between learning, practice and your first real project. Each sub-module includes:</p>
              <ul className="clean path__includes">
                {["Estimated time with a live tracker", "Graded assignments", "Quizzes and knowledge checks", "Practice Code in Argo Labs"].map((t) => (
                  <li key={t}><Use id="check" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <Phases items={PHASES} />
        </div>
      </section>

      <Band
        id="start"
        title="Try the first module. Decide after."
        text="Full access to the first module on any track. No payment info, no time limit on the preview, and no call with a counselor first."
        button={<Button to="/programs" light>Start free</Button>}
      />

      {/* SERVICES */}
      <section className="section on-dark">
        <div className="wrap">
          <Head
            eyebrow="One ecosystem"
            title="Three connected services"
            text="Students get trained and placed. Employers get access to verified talent. Clients get real technology work delivered."
            button={<Button to="/services" light>All services</Button>}
          />
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Link className="svc reveal" to={s.to} key={s.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="svc__for">{s.for}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="svc__link">Explore {s.title} <Use id="arrow" /></span>
              </Link>
            ))}
          </div>
          <p className="flowline"><b>IT Services</b> creates real client work, <b>Career Builders</b> develops job-ready candidates, and <b>Consultant Services</b> connects them with employers.</p>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <div className="wrap">
          <Head
            eyebrow="From the blog"
            title="Stay current between sessions"
            text="Short, practical reads on the tools and hiring trends shaping the technologies you're learning."
            button={<Button to="/blog">All articles</Button>}
          />
          <div className="posts">
            {POSTS.map((p, i) => (
              <Link className="post reveal" to="/blog" key={p.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="post__media">
                  {p.image ? <img src={p.image} alt={p.alt} loading="lazy" /> : <div className="post__art" aria-hidden="true"><PostArt variant={p.art} /></div>}
                  <span className="post__cat">{p.cat}</span>
                </div>
                <div className="post__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="post__go"><Use id="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section parts">
        <div className="wrap faq__grid">
          <div className="faq__aside">
            <Tag>FAQ</Tag>
            <Split>The questions you should be asking</Split>
            <p>Straight answers, including the ones that don't make us look good. Can't find yours? Ask us directly.</p>
            <Button to="/support">Visit support</Button>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>
    </>
  );
}
