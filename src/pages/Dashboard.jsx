import { usePageMeta } from "../components/Layout.jsx";
import { Callout, Cards, Checks, Flow, Head, PageHero, Section, Split, Tag } from "../components/ui.jsx";
import { ScrollButton } from "../components/interactive.jsx";

const TILES = [["Programs", "3 / 5", "modules done"], ["Projects", "Phase 2", "roadmap"], ["Timesheet", "14.5 h", "this week"], ["Resume score", "68", "out of 100"], ["Top matches", "12", "this week"], ["Interviews", "1", "upcoming"]];

function DashboardMock() {
  return (
    <div className="mock reveal">
      <div className="mock__top">
        <div className="ring" style={{ "--p": 72 }}><b>72</b></div>
        <div><strong>Overall progress score</strong><span>“Am I ready?” — one number, with what to do next</span></div>
      </div>
      <div className="tiles">
        {TILES.map(([label, value, sub], i) => (
          <div className={`tile${i === 3 ? " tile--accent" : ""}`} key={label}><span>{label}</span><b>{value}</b>{sub}</div>
        ))}
      </div>
      <div className="mock__next"><i />Next best action: finish the Real-Time Project phase</div>
    </div>
  );
}

export default function Dashboard() {
  usePageMeta("Dashboard", "One dashboard for your whole Argomind journey, with an overall progress score and a prioritized next action.");

  return (
    <>
      <PageHero
        title="One view of your entire journey"
        lead="Your Dashboard pulls every tab into a single snapshot, so you always know where you stand and what to do next — without digging through each section."
        crumb="Dashboard"
        eyebrow="Learning to placement, at a glance"
        actions={<ScrollButton target="shows" light>See what it shows</ScrollButton>}
      />

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>Your overall progress score</Tag>
            <Split>The number that answers “Am I ready?”</Split>
            <p>At the top of your Dashboard, one score reflects your complete journey — not just course completion. It blends:</p>
            <div className="mt-s"><Checks items={["Programs completed", "Real-time project hours and outcomes", "Resume Score", "Interview readiness from mock interviews", "Active application pipeline health"]} /></div>
            <p className="mt-s">And the Dashboard always tells you exactly what to work on to move it forward.</p>
          </div>
          <DashboardMock />
        </div>
      </Section>

      <Section id="shows">
        <div className="mt-s" style={{ marginBottom: 40 }}>
          <Flow center items={["Learning", "Real-time experience", "Practice", "Resume", "Applications", "Interviews", "Placement"]} />
        </div>
        <Head eyebrow="What your dashboard shows" title="Every tab, summarized" text="Each tile links straight into the tab that needs your attention." />
        <Cards items={[
          { icon: "book", title: "Programs", text: "Courses in progress, completed and next up, with time remaining per program and sub-module." },
          { icon: "brief", title: "Projects", text: "Active practiced or self-created projects, with roadmap progress and current phase." },
          { icon: "code", title: "Argo Labs", text: "Recent compile and practice activity, with quick-launch into your last project or lesson." },
          { icon: "clock", title: "Timesheet", text: "Hours logged this week and month, plus hiring score time-allocation recommendations." },
          { icon: "file", title: "Resume Builder", text: "Your current Resume Score and a suggested next update based on recent project work." },
          { icon: "spark", title: "AI Features", text: "Recent AI Mentor guidance and mock interviews, with a suggested next session for your target role." },
          { icon: "target", title: "Job Applications", text: "Top-matched openings this week and the match score breakdown for your top targets." },
          { icon: "mic", title: "Interview Tracking", text: "Upcoming interviews, follow-ups due and preparation status for each." },
          { icon: "flag", title: "Placement", text: "Overall pipeline status across every active application and your prioritized next best action." },
        ]} />
      </Section>

      <Section className="section--tight">
        <Callout small="One glance: what's moving forward, what's falling behind, and what to do next.">
          Nine tabs, each tracking a different part of your progress, can be a lot to check. The Dashboard exists so you never have to guess where to look first.
        </Callout>
      </Section>
    </>
  );
}
