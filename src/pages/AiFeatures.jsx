import { usePageMeta } from "../components/Layout.jsx";
import { Callout, Cards, Checks, DataTable, Head, Icon, PageHero, Section, Split, Steps, Strong, Tag } from "../components/ui.jsx";
import { ScrollButton, ScrollLink } from "../components/interactive.jsx";

export default function AiFeatures() {
  usePageMeta("AI Features", "AI Mentor, Match Scoring, Resume Builder, Mock Interviews, Placement Assistant and Time Guidance — all working from your documented record.");

  return (
    <>
      <PageHero
        title="AI that works alongside you"
        lead="Not to do the work for you — but to make sure you're actually ready before it counts. Argomind's AI isn't a chatbot bolted on; it works across your whole journey using your documented learning and project record."
        crumb="AI Features"
        eyebrow="One AI layer, one record"
        actions={<>
          <ScrollButton target="features" light>See the features</ScrollButton>
          <ScrollLink target="mock-interview"><span className="underline">How mock interviews work</span></ScrollLink>
        </>}
      />

      <Section id="features" className="section--mist">
        <Head eyebrow="Six AI features" title="AI across your journey" text="Each feature supports a different stage — learning, applying, interviewing and planning your time." />
        <Cards items={[
          { icon: "bulb", title: "AI Mentor", text: "In Programs. Guides you through code errors during lessons and assignments by walking through the problem instead of handing over fixed code." },
          { icon: "target", title: "AI Match Scoring", text: "In Job Applications. Ranks openings against your completed courses and project record, and shows what to improve before applying." },
          { icon: "file", title: "AI Resume Builder", text: "In Resume Builder. Assembles your resume from verified program and project history and scores it for strength and role fit." },
          { icon: "mic", title: "AI Mock Interview", text: "In Interview Practice. Runs technical and behavioral practice based on a real job description and evaluates how you think." },
          { icon: "flag", title: "AI Placement Assistant", text: "In Job Applications. Tracks applications, follow-ups and interview stages, and identifies your next action." },
          { icon: "clock", title: "AI Time & Score Guidance", text: "In Timesheet. Recommends where to spend your next study hour based on what may move your hiring score most." },
        ]} />
      </Section>

      <Section>
        <div className="split-2">
          <div className="copy">
            <Tag>One underlying record</Tag>
            <Split>AI that knows what you've actually done</Split>
            <p>Every AI feature works from the same platform record — courses, tracked project hours, task history, completed programs and other documented activity. It works from what's documented about your progress, not a guess about where you are.</p>
            <div className="mt-s">
              <Checks items={[
                <><strong>Learning activity</strong> gives context for skill development</>,
                <><strong>Project history</strong> gives context for practical experience</>,
                <><strong>Tracked hours</strong> give context for real participation</>,
                <><strong>Task history</strong> gives context for specific contributions</>,
              ]} />
            </div>
          </div>
          <div className="card" style={{ padding: 34 }}>
            <div className="card__icon"><Icon name="bulb" /></div>
            <h3 style={{ fontSize: "1.35rem" }}>AI Mentor, in practice</h3>
            <p style={{ marginBottom: 12 }}>When your code breaks, the mentor helps you:</p>
            <Checks items={["Understand why the error occurred", "Break the problem into smaller steps", "Reason through possible solutions", "Learn from mistakes instead of copying a fix", "Build independent debugging habits"]} />
            <p className="mt-s"><Strong>The mentor supports learning — you still do the work.</Strong></p>
          </div>
        </div>
      </Section>

      <Section id="mock-interview" className="section--white">
        <Head variant="solo" eyebrow="AI Mock Interview" title="Practice against the exact job you want" text="Get scored on how you think, not only on the final answer." />
        <Steps cols={5} items={[
          ["Paste the job description", "Use the role you're actually applying to or targeting."],
          ["Get a custom interview set", "Technical and behavioral questions generated from that job description."],
          ["Answer out loud or in writing", "Practice in whichever format works best for you."],
          ["Get evaluated on your thinking", "How you approach problems and structure answers — not only correctness."],
          ["Get specific feedback", "Clear, actionable notes on what to improve before the real interview."],
        ]} />
        <div className="mt-l">
          <Cards items={[
            { icon: "search", title: "Problem-solving approach", text: "How you break down and reason through technical questions." },
            { icon: "chat", title: "Communication clarity", text: "How well you explain your thinking, not just whether you reach the answer." },
            { icon: "check", title: "Technical accuracy", text: "Correctness of your solution or answer." },
            { icon: "target", title: "Role alignment", text: "How well your answers match what this specific job is looking for." },
            { icon: "users", title: "Behavioral readiness", text: "Structure and substance of behavioral answers, including frameworks such as STAR." },
          ]} />
        </div>
      </Section>

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>AI Placement Assistant</Tag>
            <Split>Never lose track of where you stand</Split>
            <p>Applications, follow-ups and interview stages live in one place, so nothing slips and you always know what to do next.</p>
            <div className="mt-s">
              <Checks items={[
                <><strong>Applications submitted</strong> — Applied, In Review, Interviewing, Offer or Rejected</>,
                <><strong>Follow-ups due</strong> — reminders after applying or interviewing</>,
                <><strong>Interview stages</strong> — which round you're in and what's next</>,
                <><strong>Next best action</strong> — one clear recommendation across your pipeline</>,
              ]} />
            </div>
          </div>
          <div className="mock reveal">
            <div className="mock__top">
              <div className="ring" style={{ "--p": 64 }}><b>3</b></div>
              <div><strong>Follow-ups awaiting action</strong><span>Example of what you might see</span></div>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".98rem" }}>
              Your interview with <Strong>[Company]</Strong> is in 4 days — we recommend 2 more mock interview sessions focused on system design before then. Your match score for <Strong>[Role]</Strong> dropped — update your resume with your latest completed project to improve it.
            </p>
            <div className="mock__next"><i />Next best action: schedule a system design mock interview</div>
          </div>
        </div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="From activity to readiness" title="How the AI features work together" />
        <DataTable headers={["Stage", "AI support"]} rows={[
          ["Learn", "AI Mentor helps you reason through coding problems"],
          ["Practice", "AI Mock Interview evaluates technical and behavioral thinking"],
          ["Build", "Real project activity creates documented experience"],
          ["Track", "Timesheet records activity and supports prioritization"],
          ["Shape", "AI Resume Builder converts documented experience into a resume"],
          ["Match", "AI Match Scoring compares your record with target roles"],
          ["Apply", "AI Placement Assistant tracks applications and next actions"],
          ["Improve", "Recommendations identify what to work on next"],
        ]} />
      </Section>

      <Section className="section--tight">
        <Callout small="Use AI to understand, not copy. Use it to practice before performance matters. Use its feedback to find your gaps.">
          AI should help you become better — not make you look better than your actual experience.
        </Callout>
      </Section>
    </>
  );
}
