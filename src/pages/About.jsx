import { usePageMeta } from "../components/Layout.jsx";
import { Button, Callout, Cards, Checks, Flow, Head, PageHero, Section, Split, Strong, Tag } from "../components/ui.jsx";
import aiSummit from "../assets/ai-summit.jpg";

const BELIEFS = ["Every lesson should help build knowledge.", "Every practice session should strengthen skills.", "Every project should create experience.", "Every task should contribute to your record.", "Every tracked hour should represent genuine effort.", "Every review should help you improve.", "Every project outcome should become evidence.", "Every experience should move you closer to your next opportunity."];

export default function About() {
  usePageMeta("About us", "Argomind closes the gap between knowing and doing with training, real client projects, and documented proof of your work.");

  return (
    <>
      <PageHero
        title="Learn. Build. Prove. Grow."
        lead="Closing the gap between knowing and doing. Argomind is built for people who have the knowledge — but need the opportunity to demonstrate what they can actually do."
        crumb="About us"
        eyebrow="About Argomind"
        image={aiSummit}
        actions={<Button to="/programs" light>Start free</Button>}
      />

      <Section>
        <div className="split-2">
          <div className="copy">
            <Tag>Who we are</Tag>
            <Split>Built for people who have the knowledge — but need the proof</Split>
            <p>You may have learned Java, Python, Salesforce, SAP, DevOps, .NET, Oracle, Workday, AI/ML or cloud through college, online courses, videos, bootcamps or self-study. You may understand the concepts.</p>
            <p>But when an employer asks, “What have you actually built?”, that's where the gap often appears. <Strong>Argomind exists to close the gap between knowing and doing.</Strong></p>
            <p>We're built for students, career switchers, self-taught learners, recent graduates, working professionals, and people with ideas in software technology.</p>
          </div>
          <Callout small="Why we exist">Most learning platforms stop at the certificate. We believe learning should lead to application, application to experience, and experience to proof.</Callout>
        </div>
      </Section>

      <Section className="section--mist">
        <div className="statement">
          <Split>From knowledge to proof</Split>
          <p>A course teaches you how something works. A project gives you the chance to apply it. Tracked work documents what you contributed. A resume communicates it, interview practice helps you explain it, and applications put it in front of employers.</p>
        </div>
        <div className="mt-m"><Flow center items={["Knowledge", "Application", "Experience", "Proof"]} /></div>
      </Section>

      <Section>
        <Head eyebrow="What makes us different" title="We don't just teach. We help you put your skills to work." text="Training that leads to proof — not just a piece of paper." />
        <Cards numbered items={[
          { icon: "book", title: "Learn real technologies", text: "Java, Python, Salesforce, SAP, DevOps, .NET, Oracle, Workday, AI/ML, Cloud, Data Engineering and more." },
          { icon: "brief", title: "Work on real-time projects", text: "Structured project environments with tasks, modules, timelines, deliverables and reviews." },
          { icon: "users", title: "Work with teams", text: "Collaborate across tracks, take responsibility, communicate, and experience project delivery." },
          { icon: "clock", title: "Track your contribution", text: "Work connected to tasks, tracked hours, deliverables, reviews, approvals and outcomes." },
          { icon: "file", title: "Build evidence for your resume", text: "Documented experience turned into clearer, more credible project evidence." },
        ]} />
      </Section>

      <Section className="section--mist">
        <Head variant="solo" eyebrow="Built for two paths" title="One principle. Two destinations." text="Some people want to become stronger candidates and get hired. Others want to use their skills to build something of their own." />
        <div className="two-paths">
          <div className="path-card reveal">
            <span className="label">Path to employment</span>
            <h3>Move from learning to employability — with evidence</h3>
            <Checks items={["Structured technology programs", "Real-time project experience and team collaboration", "Timesheet and contribution tracking", "Resume Builder and AI-powered guidance", "Job matching, interview practice and application tracking", "Placement support"]} />
          </div>
          <div className="path-card path-card--dark reveal" style={{ transitionDelay: ".08s" }}>
            <span className="label">Path to entrepreneurship</span>
            <h3>Turn an idea into something people can use</h3>
            <Checks items={["Technical capability and product-building experience", "Project ownership and leadership", "Team collaboration and delivery management", "Problem-solving and client-oriented thinking"]} />
            <p style={{ marginTop: 16 }}>Building a company takes more than an idea — it takes the ability to deliver one.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>Our IT services</Tag>
            <Split>More than a learning platform</Split>
            <p>Argomind also operates as an IT services organization, working on technology initiatives and client requirements. That services environment is what connects technology delivery with practical learning.</p>
            <div className="mt-m"><Flow items={["Real requirements", "Real tasks", "Real timelines", "Real collaboration", "Real deliverables", "Real review"]} /></div>
            <p className="muted mt-s" style={{ fontSize: ".9rem" }}>Student participation is subject to project eligibility, access, supervision, confidentiality, and applicable client or platform requirements.</p>
            <div className="mt-m"><Button to="/services">See our services</Button></div>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>Areas we work in</h3>
            <Checks cols items={["Software development", "Full stack development", "Data engineering", "Cloud solutions", "DevOps", "Enterprise technology", "AI/ML", "Digital solutions", "Technology consulting"]} />
          </div>
        </div>
      </Section>

      <section className="section on-dark">
        <div className="wrap">
          <Head eyebrow="Technology + experience + AI" title="An AI-supported career layer" text="AI should help you become better — not make you appear better than your actual experience." button={<Button to="/ai-features" light>Explore AI features</Button>} />
          <Cards items={[
            { icon: "bulb", title: "AI Mentor", text: "Supports learning and debugging." },
            { icon: "mic", title: "AI Mock Interview", text: "Practice technical and behavioral interviews." },
            { icon: "file", title: "AI Resume Builder", text: "Shapes resumes from documented experience." },
            { icon: "target", title: "AI Match Scoring", text: "Helps evaluate job alignment." },
            { icon: "flag", title: "AI Placement Assistant", text: "Manages applications and follow-ups." },
            { icon: "clock", title: "AI Time & Score Guidance", text: "Prioritizes your next learning activity." },
          ]} />
        </div>
      </section>

      <Section className="section--mist">
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>Our belief</Tag>
            <Split>Anyone can sell you a certificate</Split>
            <p>We want to help you build something more valuable: proof that you can do the work.</p>
            <div className="mt-m quote-card">Not “I completed a course.” But: “I learned the technology, applied it on projects, worked with a team, completed real tasks, tracked my contribution, built my portfolio, practiced for interviews, and can explain what I delivered.”</div>
          </div>
          <Checks items={BELIEFS} />
        </div>
      </Section>

      <Section>
        <div className="two-paths">
          <div className="path-card reveal"><span className="label">Our mission</span><h3>To close the gap between learning and real-world capability</h3><p>By giving students a structured path to learn, practice, build, contribute, document and demonstrate their skills.</p></div>
          <div className="path-card path-card--dark reveal"><span className="label">Our vision</span><h3>Opportunity not limited by the absence of prior experience</h3><p>Because people can build credible experience through meaningful work.</p></div>
        </div>
        <div className="statement mt-l">
          <div className="kicker-list"><span>Not just a course.</span><span>Not just a certificate.</span><span>Not just a resume.</span></div>
          <p>A connected journey from knowledge to real-world capability.</p>
        </div>
      </Section>
    </>
  );
}
