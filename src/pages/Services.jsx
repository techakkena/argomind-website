import { usePageMeta } from "../components/Layout.jsx";
import { Button, Callout, CardLink, Cards, Checks, DataTable, Flow, GhostLink, Head, Icon, PageHero, Section, Split, Tag } from "../components/ui.jsx";
import { ScrollButton, SubNav } from "../components/interactive.jsx";
import conferenceHall from "../assets/conference-hall.jpg";

const SUBNAV = [["ecosystem", "Ecosystem"], ["consultant-services", "Consultant Services"], ["it-services", "IT Services"], ["career-builders", "Career Builders"], ["value", "Who it's for"]];

const PORTFOLIO = ["Resume", "Technical skills", "Completed courses", "Certifications", "Coding challenge scores", "GitHub repositories", "Real-time project contributions", "AI interview scores", "Mock interview recordings", "Timesheet history", "Job application history"];

export default function Services() {
  usePageMeta("Services", "Argomind's three connected services: Consultant Services for employers, IT Services for clients, and Career Builders for students.");

  return (
    <>
      <PageHero
        title="One ecosystem. Three connected services."
        lead="Students get trained and placed. Employers get access to verified talent. Clients get real technology work delivered — each service strengthening the others."
        crumb="Services"
        eyebrow="Consultant Services · IT Services · Career Builders"
        image={conferenceHall}
        actions={<>
          <ScrollButton target="consultant-services" light>Explore the services</ScrollButton>
          <GhostLink to="/contact">Talk to us</GhostLink>
        </>}
      />
      <SubNav links={SUBNAV} />

      <Section id="ecosystem" className="section--mist">
        <Head variant="center" eyebrow="Our ecosystem" title="Three services feeding one another" text="The same philosophy connects all three: create meaningful work, document capability, develop talent, and connect people and organizations through evidence and delivery." />
        <Flow center items={["IT Services creates real client work", "Career Builders develops job-ready candidates", "Consultant Services connects verified talent with employers"]} />
      </Section>

      <Section id="consultant-services">
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>For employers</Tag>
            <Split>Consultant Services: recruitment built around proof, not paperwork</Split>
            <p>We connect employers directly with candidates who have verified, real-time project experience — not just a resume full of claims. Discover candidates by what they've actually learned and done, with deeper visibility into technical capability and readiness than a traditional pipeline gives you.</p>
            <div className="mt-m"><Button to="/contact">Talk to our recruiting team</Button></div>
          </div>
          <div className="card" style={{ padding: 32 }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>Recruiter features</h3>
            <Checks items={["Dedicated recruiter login, separate from students", "Search candidates by skill, track and experience level", "Live resumes and portfolios, not only static PDFs", "Coding scores and real project history", "AI mock interview scores and recordings", "Download profiles for internal review or ATS upload", "Schedule interviews and share structured feedback", "Track hiring status from first contact through offer"]} />
          </div>
        </div>
        <div className="mt-l">
          <Head variant="solo" eyebrow="Candidate portfolio" title="A complete candidate picture" text="Backed by documented activity, project records and performance." />
          <div className="flow">{PORTFOLIO.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </Section>

      <section className="section on-dark" id="it-services">
        <div className="wrap">
          <Head eyebrow="For clients" title="IT Services for all technologies" text="The client work behind the training — real projects, delivered by real teams under experienced technical oversight." button={<Button to="/contact" light>Discuss a project</Button>} />
          <Cards items={[
            { icon: "code", title: "Full stack development", text: "Application development across Java, Python, .NET and modern front-end frameworks." },
            { icon: "db", title: "Data engineering", text: "Pipelines, warehousing and data platform solutions." },
            { icon: "cloud", title: "DevOps & cloud", text: "CI/CD, containers, infrastructure setup and cloud operations." },
            { icon: "layers", title: "Enterprise platforms", text: "Salesforce, SAP, Oracle and Workday configuration and development." },
            { icon: "spark", title: "AI/ML integration", text: "Custom model development and AI integration into existing products." },
            { icon: "check", title: "QA & release support", text: "Testing, automation and release support." },
          ]} />
          <div className="split-2 mt-l split-2--top">
            <div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>Why this matters for students</h3>
              <p style={{ color: "#aab6cc", marginBottom: 12 }}>This service environment is what makes real client projects possible within eligible programs:</p>
              <Checks items={["Real requirements, tasks and deliverables", "Real timelines and team collaboration", "Technical oversight with code and work reviews", "Accountability for assigned contributions"]} />
              <p style={{ color: "#8b9bb8", fontSize: ".88rem", marginTop: 14 }}>Student participation is subject to project eligibility, access, supervision, confidentiality, and applicable client or platform requirements.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>Why this matters for clients</h3>
              <p style={{ color: "#aab6cc" }}>Access to skilled, motivated contributors working under experienced technical oversight, with a focus on quality, accountability and delivery outcomes.</p>
              <div className="callout callout--blue mt-m"><p>Clients get technology work delivered. Students get meaningful experience. Argomind connects the two.</p></div>
            </div>
          </div>
        </div>
      </section>

      <Section id="career-builders" className="section--mist">
        <Head eyebrow="For students" title="Career Builders: everything after the learning" text="Takes a trained, experienced candidate and turns that record into a structured path toward employment." />
        <Cards items={[
          { icon: "file", title: "Resume Builder", text: "Auto-generated from verified course and project history, with scoring and improvement guidance.", extra: <CardLink to="/resume-builder">Learn more</CardLink> },
          { icon: "target", title: "Job matching", text: "Openings ranked against your real record, with work-authorization filtering where applicable." },
          { icon: "mic", title: "AI mock interviews", text: "Practice matched to the real job description and evaluated on thinking, not just answers.", extra: <CardLink to="/ai-features#mock-interview">Learn more</CardLink> },
          { icon: "flag", title: "Interview & application tracking", text: "Applications, follow-ups, interview stages and next actions in one place." },
          { icon: "rocket", title: "Placement support", text: "Guidance and next-best actions through the hiring journey toward an offer." },
          { icon: "bulb", title: "Why it exists", text: "Training was never the finish line. Career Builders bridges “I completed the program” and “I got the job.”" },
        ]} />
        <div className="mt-m"><Flow center items={["Training", "Experience", "Resume", "Match", "Interview", "Application tracking", "Placement"]} /></div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="How it fits together" title="How the three services work together" />
        <DataTable headers={["Service", "Primary role", "Feeds into"]} rows={[
          ["IT Services", "Creates and delivers real client technology work", "Student project experience, practical exposure, delivery capability"],
          ["Career Builders", "Turns learning and project experience into job-ready candidates", "Resumes, job matching, interview prep, applications, placement"],
          ["Consultant Services", "Connects verified candidates with employers", "Candidate discovery, interviews, hiring, feedback, placement outcomes"],
        ]} />
        <div className="mt-m"><Flow center items={["Client need", "IT Services", "Real project work", "Student experience", "Career Builders", "Job-ready profile", "Consultant Services", "Employer", "Hiring"]} /></div>
      </Section>

      <Section id="value" className="section--white">
        <Head variant="center" eyebrow="Who it's for" title="Value for everyone in the ecosystem" />
        <div className="cards">
          <div className="card reveal"><div className="card__icon"><Icon name="book" /></div><h3>Students</h3>
            <Checks items={["Learn technologies aligned with real work", "Gain structured project exposure where eligible", "Build a documented project and skills record", "Practice interviews against real roles", "Track applications and get placement guidance"]} /></div>
          <div className="card reveal" style={{ transitionDelay: ".06s" }}><div className="card__icon"><Icon name="users" /></div><h3>Employers</h3>
            <Checks items={["Discover candidates by technology and skills", "Review live resumes and portfolios", "See project contributions and technical performance", "Review interview practice results", "Track hiring stages through offer"]} /></div>
          <div className="card reveal" style={{ transitionDelay: ".12s" }}><div className="card__icon"><Icon name="brief" /></div><h3>Clients</h3>
            <Checks items={["Delivery across development, data, cloud, DevOps, enterprise, AI/ML and QA", "Teams working under technical oversight", "An ecosystem developing practical talent alongside delivery"]} /></div>
        </div>
        <div className="mt-l">
          <Callout small="Our operating principle">Training should create capability. Real work should create experience. Experience should create evidence. Evidence should create opportunity.</Callout>
        </div>
      </Section>
    </>
  );
}
