import { usePageMeta } from "../components/Layout.jsx";
import { Callout, Cards, Checks, DataTable, Flow, Head, PageHero, Section, Split, Steps, Strong, Tag } from "../components/ui.jsx";
import { ScrollButton } from "../components/interactive.jsx";

const WEEK = [["Mon", 1.5], ["Tue", 2.5], ["Wed", 1], ["Thu", 3], ["Fri", 2], ["Sat", 4], ["Sun", 0.5]];

function TimesheetMock() {
  const max = Math.max(...WEEK.map(([, h]) => h));
  return (
    <div className="mock reveal">
      <div className="mock__top">
        <div className="ring" style={{ "--p": 58 }}><b>14.5</b></div>
        <div><strong>Hours this week</strong><span>Real-time project · Data Engineering</span></div>
      </div>
      <div className="bars" role="img" aria-label="Example bar chart of hours logged per day">
        {WEEK.map(([day, h]) => (
          <div key={day} className={h >= 2 ? "on" : undefined}><i style={{ height: `${(h / max) * 100}%` }} />{day}</div>
        ))}
      </div>
      <div className="legend"><span>Time remaining <b>31 h</b></span><span>Weekly target <b>11 h</b></span></div>
      <div className="mock__next"><i />Next hour: real-time project tasks (+8 h suggested)</div>
    </div>
  );
}

export default function Timesheet() {
  usePageMeta("Timesheet", "Track time across programs, projects and client tasks, see what's left, and get guidance on where your next hour should go.");

  return (
    <>
      <PageHero
        title="Track time. See progress. Know what to do next."
        lead="Every hour counts — literally. See exactly where your time goes, what's left, and where to spend it next to move your hiring score up."
        crumb="Timesheet"
        eyebrow="Your time, your projects, your verified record"
        actions={<ScrollButton target="dashboard" light>See the dashboard</ScrollButton>}
      />

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>What it is</Tag>
            <Split>A structured record, tracked as you work</Split>
            <p>Timesheet Management is your personal and team dashboard for tracked time across every program, project and client task. Time is recorded as you work — not estimated or entered after the fact.</p>
            <div className="mt-m"><Flow items={["Tracked time", "Progress", "Contribution", "Project history"]} /></div>
          </div>
          <TimesheetMock />
        </div>
      </Section>

      <Section id="dashboard">
        <Head eyebrow="Your time dashboard" title="What you can see" text="A consolidated view of your learning and project activity." />
        <Cards cols={4} items={[
          { icon: "clock", title: "Time spent", text: "Hours logged per program, sub-module and project, tracked automatically." },
          { icon: "flag", title: "Time remaining", text: "Estimated hours left on your current program or project, updated in real time." },
          { icon: "chart", title: "Daily, weekly, monthly", text: "Review your activity by day, week or month to see consistency and plan sessions." },
          { icon: "file", title: "Detailed log", text: "What you worked on, when, and for how long — down to the sub-module or task." },
        ]} />
      </Section>

      <Section className="section--white">
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>Team timesheets</Tag>
            <Split>Manage delivery, not just hours</Split>
            <p>When you hold a lead or reviewer role on a client project, the team view turns time data into delivery visibility — practical experience managing work, not just completing it.</p>
            <p className="mt-s"><Strong>The goal isn't to count hours. It's to recognize delivery risk early and act.</Strong></p>
          </div>
          <div className="card" style={{ padding: 34 }}>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 12 }}>What leads and reviewers can monitor</h3>
            <Checks items={["Hours each teammate has logged on assigned tasks", "Which tasks are in progress, completed or overdue", "Team velocity against the project deadline", "Automatic flags when logged time falls behind a task's timeline"]} />
          </div>
        </div>
      </Section>

      <Section className="section--mist">
        <Head variant="solo" eyebrow="Hiring score guidance" title="Where to spend your next hour" text="Your Hiring Score blends completed programs, project hours, assignment and quiz performance, and interview practice. The dashboard highlights underweighted areas and suggests how much time to add." />
        <DataTable headers={["Area", "Current time", "Suggested additional", "Why it matters"]} rows={[
          ["Real-time project hours", "12 hrs", "+8 hrs", "Verified project hours are weighted heavily in match scores"],
          ["Mock interview practice", "2 sessions", "+3 sessions", "More mock interviews improve interview readiness"],
          ["Data structures & algorithms module", "4 hrs", "+6 hrs", "Frequently tested in technical screens for target roles"],
          ["Resume-linked project documentation", "Incomplete", "+2 hrs", "Undocumented projects strengthen your resume less"],
        ]} />
        <p className="muted mt-s" style={{ fontSize: ".9rem" }}>Example recommendations. Guidance is based on your current progress and target track, and is meant to help you prioritize.</p>
        <div className="split-2 mt-l">
          <DataTable headers={["Focus area", "Suggested weekly time"]} rows={[
            ["Real-time projects", "6 hrs"], ["Interview practice", "3 hrs"], ["Knowledge checks", "2 hrs"], [<strong key="t">Total</strong>, <strong key="h">11 hrs</strong>],
          ]} />
          <div className="copy">
            <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>A weekly time budget</h3>
            <p>Instead of guessing what to study next, you get a suggested allocation based on your current progress and target track.</p>
          </div>
        </div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="From tracking to action" title="Seven steps, every week" />
        <Steps items={[
          ["Track", "Your work activity is recorded."],
          ["Understand", "See where your hours are going."],
          ["Compare", "Review time spent against remaining work and timelines."],
          ["Identify", "Find areas that need more attention."],
          ["Prioritize", "Use recommendations to decide what's next."],
          ["Act", "Spend your next hour on the top priority."],
          ["Review", "Come back and measure your progress."],
        ]} />
      </Section>

      <Section className="section--white">
        <Head variant="solo" eyebrow="Connected" title="How timesheets connect across Argomind" />
        <DataTable headers={["Area", "Timesheet connection"]} rows={[
          ["Programs", "Time invested across programs and sub-modules"],
          ["Projects", "Verified project activity and remaining work"],
          ["Teams", "Team member hours and task progress for leads and reviewers"],
          ["Client tasks", "Time against specific client project activities"],
          ["Assignments & quizzes", "Performance used alongside tracked activity in the Hiring Score"],
          ["Interview practice", "Preparation activity used in prioritization"],
          ["Resume & project history", "The time record as supporting project evidence"],
        ]} />
        <div className="mt-l">
          <Callout blue small="Where did my time go? What's left? Where should my next hour go?">
            Know your time. Own your progress. Make your next hour count.
          </Callout>
        </div>
      </Section>
    </>
  );
}
