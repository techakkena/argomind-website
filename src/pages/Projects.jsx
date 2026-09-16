import { usePageMeta } from "../components/Layout.jsx";
import { Button, Cards, Checks, DataTable, Head, PageHero, Section, Split, Steps, Tag } from "../components/ui.jsx";
import { ScrollButton, ScrollLink } from "../components/interactive.jsx";

const INCLUDED = [
  { icon: "map", title: "Roadmap", text: "The milestones the project was built in, from setup to deployment." },
  { icon: "layers", title: "Architecture", text: "A system design diagram showing how the components connect." },
  { icon: "gear", title: "Backend technologies", text: "The frameworks, languages and services used." },
  { icon: "palette", title: "Frontend technologies", text: "The UI frameworks and libraries used." },
  { icon: "db", title: "Database", text: "Schema design and the database technology behind it." },
  { icon: "code", title: "Practice code", text: "The full working codebase, ready to copy into your own workspace and modify." },
];

const EXAMPLES = [
  ["E-commerce Order Management System", "Java Full Stack"],
  ["Real-Time Data Pipeline with Dashboard", "Data Engineering"],
  ["CI/CD Pipeline for a Microservices App", "DevOps"],
  ["Custom Salesforce Approval Workflow with Apex Triggers", "Salesforce"],
  ["AI-Powered Chatbot with RAG Integration", "AI/ML"],
  ["Cloud Cost Monitoring Dashboard", "Cloud Engineering"],
  ["Automated PL/SQL Reporting Suite", "Oracle"],
];

export default function Projects() {
  usePageMeta("Projects", "Practice on production-style project architectures or submit your own project idea and build it with mentor support.");

  return (
    <>
      <PageHero
        title="Don't just learn the syntax — build something real"
        lead="Practice on existing production-style architectures, or pitch your own project and build it with our support. Both paths end the same way: a working project, documented architecture, and a build history tied to your name."
        crumb="Projects"
        eyebrow="Two paths to a real build"
        actions={<>
          <ScrollButton target="practice" light>Practice existing projects</ScrollButton>
          <ScrollLink target="create"><span className="underline">Create your own</span></ScrollLink>
        </>}
      />

      <Section className="section--mist">
        <div className="two-paths">
          <div className="path-card reveal">
            <span className="label">Path 1</span>
            <h3>Practice existing projects</h3>
            <p>Choose from a library of pre-built projects, each with a complete, production-style architecture already documented. Study how it's built, then work directly with the codebase.</p>
            <Checks items={["Browse by track", "Review roadmap, architecture and stack", "Copy the code into your workspace", "Modify, break, rebuild and experiment"]} />
            <div className="mt-m"><ScrollButton target="practice">Explore the library</ScrollButton></div>
          </div>
          <div className="path-card path-card--dark reveal" style={{ transitionDelay: ".08s" }}>
            <span className="label">Path 2</span>
            <h3>Create your own project</h3>
            <p>Have an idea? Submit it for review. Once approved, you get admin support, a structured roadmap and guided architecture planning — so your idea becomes a working build.</p>
            <Checks items={["Submit your idea in a standard format", "Admin review for feasibility and scope", "Get a custom build plan", "Build with mentor support"]} />
            <div className="mt-m"><ScrollButton target="create" light>See how submissions work</ScrollButton></div>
          </div>
        </div>
      </Section>

      <Section id="practice">
        <Head eyebrow="Path 1" title="What's included with every existing project" text="A sandbox, not a client deliverable — so you can learn how real systems are put together without risk." />
        <Cards items={INCLUDED} />
        <div className="mt-l">
          <Head variant="solo" eyebrow="How it works" title="From library to your own workspace" />
          <Steps items={[
            ["Browse the library", "Filter projects by track — Python, Java, Data Engineering, DevOps, .NET, Salesforce, SAP, Oracle, Workday, AI/ML, Cloud and more."],
            ["Review the design", "Open a project to study its roadmap, architecture and tech stack before touching code."],
            ["Copy the practice code", "One click copies the full project into your Argo Labs workspace."],
            ["Experiment and track", "Modify, break and rebuild — then compare your progress against the original roadmap."],
          ]} />
        </div>
      </Section>

      <Section className="section--white">
        <Head variant="solo" eyebrow="Library preview" title="Example projects you might find" text="A sample of what's in the library today. New projects are added as tracks grow." />
        <div className="articles">
          {EXAMPLES.map(([name, track]) => (
            <div className="article reveal" key={name}>
              <span className="article__cat">{track}</span>
              <h3>{name}</h3>
              <div className="article__foot"><span>Roadmap · Architecture · Code</span></div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="create">
        <Head eyebrow="Path 2" title="Create your own project" text="Every submission follows the same format so it can be reviewed quickly and fairly." />
        <DataTable headers={["Field", "What to include"]} rows={[
          ["Project title", "A short, clear name for your project"],
          ["Idea summary", "2–3 sentences: what problem does it solve, and who is it for?"],
          ["Synopsis", "What the project does, its core features, and the outcome you're aiming for"],
          ["Target track", "Which technology track it belongs to (Python, Java Full Stack, Data Engineering, etc.)"],
          ["Estimated scope", "Small (1–2 weeks) / Medium (3–5 weeks) / Large (6+ weeks)"],
          ["Prior experience", "Relevant modules or projects you've already completed"],
          ["Reference links (optional)", "Similar tools, apps or inspirations"],
        ]} />
        <div className="mt-l">
          <Steps items={[
            ["Submit your idea", "Fill in the submission format above so reviewers have everything they need."],
            ["Admin review", "Reviewed for feasibility, scope and learning value. You'll hear back as Approved, Needs Revision, or Not Approved with a reason."],
            ["Get your build plan", "A roadmap with milestones, reviewed architecture, recommended backend, frontend and database, plus a starter workspace."],
            ["Build with support", "Regular milestone check-ins, mentor help on architecture and implementation, and hours tracked like client work."],
          ]} />
        </div>
      </Section>

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>Why both paths matter</Tag>
            <Split>Pattern recognition, then original thinking</Split>
            <p>Practicing existing projects teaches you how production-grade systems are architected — patterns you won't get from tutorials alone. Creating your own project proves initiative, something a portfolio of only guided work can't show.</p>
            <p>Most students do both: practice on two or three existing projects, then create one original project that becomes the centerpiece of their portfolio.</p>
          </div>
          <div className="card" style={{ padding: 34 }}>
            <h3 style={{ fontSize: "1.35rem", marginBottom: 14 }}>What shows up on your profile</h3>
            <p style={{ marginBottom: 10 }}>Every completed project — practiced or created — adds to your record with:</p>
            <Checks items={["Project title and track", "Roadmap completion status", "Architecture and tech stack used", "Time invested", "A link recruiters can check"]} />
            <p className="mt-s">It's the same record used by the Resume Builder and Job Applications, so your projects become proof of work.</p>
          </div>
        </div>
      </Section>

      {/* TODO: replace with real case studies when they're ready */}
      <Section className="section--tight">
        <div className="statement">
          <Tag>Coming soon</Tag>
          <Split>Client case studies</Split>
          <p>Full write-ups of real client projects — including the parts that went badly — are being prepared and will be published here.</p>
          <div className="mt-m"><Button to="/contact">Ask for a client reference</Button></div>
        </div>
      </Section>
    </>
  );
}
