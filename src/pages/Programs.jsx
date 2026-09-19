import { usePageMeta } from "../components/Layout.jsx";
import { Button, Callout, Cards, Checks, Head, PageHero, Section, Split, Steps, Strong, Tag } from "../components/ui.jsx";
import { ScrollButton, ScrollLink, Tabs } from "../components/interactive.jsx";
import { TRACKS } from "../data/tracks.js";

function ProgramPanel({ track, index }) {
  const total = track.modules.reduce((sum, [, h]) => sum + h, 0);
  const max = Math.max(...track.modules.map(([, h]) => h));
  return (
    <div className="program">
      <div>
        <Tag>Track {index + 1} of {TRACKS.length}</Tag>
        <h3>{track.name}</h3>
        <p className="muted">Practice environment in Argo Labs: {track.tools}.</p>
        <div className="program__total">
          <div><b>{total}</b><span>estimated hours</span></div>
          <div><b>{track.modules.length}</b><span>sub-modules</span></div>
        </div>
        <Checks items={["Foundation phase assumes no prior background", "Real-time project included", "First module free — no card needed"]} />
        <div className="mt-m"><Button to="/contact">Start the first module free</Button></div>
      </div>
      <ol className="clean modules">
        {track.modules.map(([name, hours], i) => (
          <li className="module" key={name}>
            <span className="module__n">{i + 1}</span>
            <span><strong>{name}</strong><small>Assignments · Quizzes · Practice Code</small></span>
            <span className="module__hrs">{hours} hrs</span>
            <span className="module__bar" aria-hidden="true"><i style={{ width: `${Math.round((hours / max) * 100)}%` }} /></span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Programs() {
  usePageMeta("Programs", "14 technology tracks, each following the same four-phase path from foundation to a real-time client project and interview prep.");

  return (
    <>
      <PageHero
        title="Learn real technologies, build real projects, get hired with proof"
        lead="This is a strong idea because you’re not just building a Learning Management System (LMS). You’re building a Career Acceleration Platform that takes a candidate from Learning → Real-Time Experience → Practice → Compliance → Resume → Job Applications → Interview Tracking → Placement."
        crumb="Programs"
        eyebrow="14 technology tracks"
        actions={<>
          <ScrollButton target="tracks" light>Start free</ScrollButton>
          <ScrollLink target="path"><span className="underline">How every track works</span></ScrollLink>
        </>}
      />

      <Section id="path">
        <div className="split-2">
          <div className="copy">
            <Tag>Why it's different</Tag>
            <Split>A certificate alone doesn't tell employers what you can do</Split>
            <p>You complete a course and receive a certificate, then build tutorial projects before applying. Months go by, and the certificate makes little difference because employers can't tell what it really signifies.</p>
            <p><Strong>Learn it properly. Practice it on real work. Walk into your interview ready.</Strong></p>
          </div>
          <Callout
            small={
              <>
                <div>Candidate Portal → Learning - Jobs - Dashboard</div>
                <div style={{ textAlign: "left" }}>↓</div>
                <div>Backend APIs → Authentication - AI - Job Aggregation <div style={{ textAlign: "left" }}>↓</div>PostgreSQL → AWS/Azure Cloud</div>
              </>
            }
          >
            Build an AI-powered Career Acceleration Platform that prepares international students and fresh graduates for real IT jobs in one platform.
          </Callout>
        </div>
      </Section>

      <Section className="section--mist">
        <Head eyebrow="Inside every sub-module" title="What each sub-module includes" text="Everything you need to learn a concept, check it, and practice it — in one place." />
        <Cards cols={6} items={[
          { icon: "video",title: "Video Lessons",text: "Learn concepts through structured video lessons and practical demonstrations." },
          { icon: "notes",title: "Learning Notes",text: "Access concise notes and reference material for every lesson." },
          { icon: "clock", title: "Estimated time", text: "A live time-remaining tracker updates as you progress, so you can plan your week." },
          { icon: "file", title: "Assignments", text: "Hands-on work that's reviewed and scored, not just marked complete." },
          { icon: "check", title: "Quizzes", text: "Short knowledge checks to confirm the concept stuck before you move on." },
          { icon: "code", title: "Practice Code", text: "One button opens Argo Labs, the in-browser compiler, preloaded for the lesson." },
        ]} />
      </Section>

      <Section id="tracks">
        <Head variant="solo" eyebrow="Choose your track" title="Browse all 14 programs" text="Pick a track to see its sub-modules and estimated hours. Durations are estimates and depend on your pace." />
        <Tabs label="Technology tracks" tabs={TRACKS.map((t, i) => ({ id: t.id, label: t.tab, content: <ProgramPanel track={t} index={i} /> }))} />
      </Section>

      <Section className="section--white">
        <Head variant="solo" eyebrow="The Eight phases" title="One path in every track" />
        <Steps items={[
          ["Phase-1:Learn → Build → Deploy", "From your first lesson to production, all in one phase.Learn the concepts, practice code live in the compiler, debug real failures, commit through GitHub for review, and deploy your work to a live environment — a complete build cycle, not just a lesson."],
          ["Phase 2: Real-Time Projects & Release", "From working code to a shipped product.Join a live project with real tasks and deadlines, test it the way a QA team would, fix what breaks, and release it — proof you can deliver, not just build."],
          ["Phase 3: Time Track → Update → Target", "From pending hours to completed delivery, tracked in real time.Log pending and completed time as you work, watch the Timesheet Management percentage update step by step, and turn every tracked hour into a verified product delivery update — a live progress record, not just a log."],
          ["Phase 4: Resume Builder → Aggregate → Matching Jobs", "From a polished resume to the right opportunity, matched automatically.Build a professional resume from your project work, aggregate job listings from multiple sources into one feed, and let intelligent resume matching surface roles that fit your skills — a complete job-readiness pipeline, not just a resume."],
          ["Phase 5: Dashboard View → Track → Grow","Learning: Java 82% | Data Engineering 40% | Projects: 2/5 completed | Coding Problems: 450 solved | Resume Score: 94% | Jobs Applied: 213 | Interviews: 14 | Offers: 2 | Hours Completed: 320 | Timesheet Approved: 12 Weeks"],
          ["Phase 6: AI → Mentorship → Roadmap","Meet your AI Mentor — always on, always sharp. Ask anything, anytime — no question too small. AI Interviewer runs real mock interviews and gives real feedback. AI Career Coach suggests courses, projects, jobs, interview questions, and a daily study plan. AI Coding Assistant helps you debug without ever handing you the answer."],
          ["Phase 7: Job Track → Apply → Support","Every job opportunity becomes a structured record. Track selected jobs, apply with the right resume, monitor application status and interview stages, and receive support from Argomind when something stalls or requires attention — turning job applications into a guided and trackable process."],
          ["Phase 8: Achieve the Goal → Secure Employment → Submit Your Enrollment","Your journey doesn't end with training — it ends with employment. Your journey leads to employment. Argomind trains, guides, and supports you through projects, interviews, and job applications. Once employed, submit your enrollment details and complete your journey with Argomind."],
        ]} />
      </Section>
    </>
  );
}
