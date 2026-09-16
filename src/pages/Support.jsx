import { usePageMeta } from "../components/Layout.jsx";
import { Button, CardLink, Cards, Checks, DataTable, Head, Icon, PageHero, Section, Split, Tag } from "../components/ui.jsx";
import { DemoForm, Faq, Field, ScrollButton, ScrollLink, SubNav } from "../components/interactive.jsx";

const SUBNAV = [["guide", "Where to go"], ["faq", "FAQ"], ["feedback", "Feedback"], ["downloads", "Downloads"], ["live-chat", "Live chat"], ["contact-options", "Contact"]];

const FAQS = [
  ["Is job placement guaranteed?", "No. If a platform promises you a job, be cautious — that promise usually isn't true, and it can put you in a role that isn't right for you. We offer training, real project experience, interview preparation and help finding real openings. Your results depend on your effort, the job market and timing."],
  ["Are these real projects, or simulations dressed up as real?", "They're real. You'll work on actual client projects with real responsibilities — this is the core of the program. You can request a client reference before enrolling, and we'll provide one."],
  ["Will employers actually accept this as experience?", "It depends on the employer. Some will count it as work experience; others will see it as strong portfolio work. What we can promise is that you'll be able to speak in detail about your specific decisions and tasks — which is what holds up in an interview."],
  ["I've been burned by a training-and-placement program before. Why should I trust this one?", "You shouldn't just take our word for it. The work is real, your hour records belong to you and can be exported anytime, the first module is free with no sales pressure, and we'll connect you with a past student who has no connection to our marketing. If any of that isn't true, walk away."],
  ["Do I need prior experience to start?", "No. Programs are structured beginner to advanced, and the Foundation phase of every track assumes no prior background in that technology. Career switchers can start from the beginning of any track."],
  ["Can I switch programs after I've started?", "Yes. Your completed hours and general progress (assignments and quizzes) stay on your record, and you can move into a new track's Foundation phase at any time."],
];

export default function Support() {
  usePageMeta("Support", "FAQ, feedback, downloads, live chat and contact options for Argomind students and visitors.");

  return (
    <>
      <PageHero
        title="Support"
        lead="Have a question, a problem, or something to say? Answers, help channels and downloadable resources are all in one place — whether you're deciding if Argomind is right for you or you're deep into a project."
        crumb="Support"
        eyebrow="Help center"
        actions={<>
          <ScrollButton target="live-chat" light>Start a live chat</ScrollButton>
          <ScrollLink target="faq"><span className="underline">Read the FAQ</span></ScrollLink>
        </>}
      />
      <SubNav links={SUBNAV} />

      <Section id="guide" className="section--mist">
        <Head variant="solo" eyebrow="Quick guide" title="Where to go for what" />
        <Cards cols={4} items={[
          { icon: "chat", title: "Get an instant answer", text: "Check the FAQ below or start a live chat.", extra: <CardLink to="/support#faq">Go to FAQ</CardLink> },
          { icon: "bug", title: "Report something broken", text: "Tell us what isn't working or could be better.", extra: <CardLink to="/support#feedback">Send feedback</CardLink> },
          { icon: "download", title: "Get a document", text: "Your syllabus, certificate, resume or records.", extra: <CardLink to="/support#downloads">See downloads</CardLink> },
          { icon: "mail", title: "Send a detailed message", text: "Attach a file or write a longer request.", extra: <CardLink to="/contact">Contact us</CardLink> },
        ]} />
      </Section>

      <Section id="faq">
        <div className="faq__grid">
          <div className="faq__aside">
            <Tag>FAQ</Tag>
            <Split>Straight answers</Split>
            <p>The questions people actually ask before — and after — signing up. Not finding yours? Use live chat for an instant answer, or send a question through Contact; most get a response within one business day.</p>
            <Button to="/contact">Ask a question</Button>
          </div>
          <Faq items={FAQS} />
        </div>
      </Section>

      <Section id="feedback" className="section--mist">
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>Feedback</Tag>
            <Split>Tell us what's working and what isn't</Split>
            <p>Your feedback directly shapes what gets built next. Course content, platform features and support quality are adjusted based on what students actually report.</p>
            <div className="mt-s">
              <Checks items={[
                <><strong>Course content</strong> — an unclear lesson, a mismatched assignment, a quiz question that felt off</>,
                <><strong>Platform features</strong> — something confusing, or a feature you wish existed</>,
                <><strong>Mentor or reviewer interactions</strong> — review quality, response time, clarity</>,
                <><strong>Career tools</strong> — job matching, resume builder or interview prep accuracy</>,
                <><strong>Bugs</strong> — something that didn't work the way it should</>,
              ]} />
            </div>
            <p className="mt-s">Anonymous feedback is available, though adding your name lets us follow up if we need more detail.</p>
          </div>
          <DemoForm title="Send feedback" intro="Takes about a minute." submitLabel="Submit feedback">
            <Field id="fb-cat" label="Category">
              <select id="fb-cat" required defaultValue="">
                <option value="">Choose a category</option>
                {["Course content", "Platform", "Mentor / review", "Career tools", "Bug report", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field id="fb-where" label="Program, module or phase" optional="optional"><input id="fb-where" placeholder="e.g. DevOps · CI/CD Pipelines" /></Field>
            <Field id="fb-msg" label="What happened?" full><textarea id="fb-msg" required placeholder="Describe what happened and what you expected" /></Field>
            <Field id="fb-file" label="Screenshot" optional="optional"><input id="fb-file" type="file" accept="image/*" /></Field>
            <Field id="fb-name" label="Name" optional="leave blank to stay anonymous"><input id="fb-name" autoComplete="name" /></Field>
          </DemoForm>
        </div>
      </Section>

      <Section id="downloads">
        <Head variant="solo" eyebrow="Downloads" title="Resources you can save, print or reference offline" text="All downloads are generated from your live account data, so exports are always current. Sign in to download." />
        <DataTable headers={["Resource", "Format", "Description"]} rows={[
          ["Program syllabus (per track)", "PDF", "Full module and phase breakdown, hours and learning outcomes"],
          ["Certificate of completion", "PDF", "Generated automatically once a program is fully completed and signed off"],
          ["Project record export", "PDF / CSV", "Tracked hours, tasks and project history — the same record used in your Resume Builder"],
          ["Resume (all saved versions)", "PDF / DOCX", "Every resume version you've built, downloadable individually"],
          ["Timesheet export", "CSV", "Logged hours by program, project and date range"],
          ["Interview prep guide (per track)", "PDF", "Common interview questions and strong-answer approaches for your track"],
          ["Platform user guide", "PDF", "A walkthrough of every tab — Programs, Projects, Argo Labs, Timesheet, Resume Builder and more"],
        ]} />
      </Section>

      <Section id="live-chat" className="section--white">
        <div className="split-2 split-2--top">
          <div className="copy">
            <Tag>Help & live chat</Tag>
            <Split>Real-time help when you don't want to wait for email</Split>
            <p>Live chat is staffed during business hours; outside those hours, messages are queued and answered first thing the next business day. An AI support assistant is available 24/7 for common questions — password resets, navigation help, “where do I find X” — and hands off to a person whenever you need one.</p>
            {/* TODO: open the live chat widget here once it's integrated */}
            <div className="mt-m"><Button to="/contact">Start a live chat</Button></div>
          </div>
          <div className="cards cards--2">
            <div className="card"><div className="card__icon"><Icon name="chat" /></div><h3>Use live chat for</h3>
              <Checks items={["Quick platform questions", "Technical issues, like the compiler not loading", "Account or billing questions", "Anything urgent, like a client project deadline"]} /></div>
            <div className="card"><div className="card__icon"><Icon name="mail" /></div><h3>Use a ticket for</h3>
              <Checks items={["Detailed course content feedback", "Requests needing review, like disputing a quiz score", "Non-urgent questions that need a longer answer"]} /></div>
          </div>
        </div>
      </Section>

      <Section id="contact-options" className="section--mist">
        <Head eyebrow="Contact" title="For anything that doesn't fit a quick chat" text="Most inquiries are answered within one business day. Urgent issues — blocked from a live client project, or payment problems — are flagged for same-day response." button={<Button to="/contact">Go to contact form</Button>} />
        <DataTable headers={["Reason", "Best channel"]} rows={[
          ["General questions", "Contact form or live chat"],
          ["Technical support", "Live chat or help center ticket"],
          ["Billing / enrollment", "Contact form (Billing category)"],
          ["Mentor or reviewer feedback concerns", "Contact form (Mentor Feedback category)"],
          ["Media / partnership inquiries", "Contact form (Partnerships category)"],
          ["Report a bug", "Feedback form (Bug Report) or contact form"],
        ]} />
      </Section>
    </>
  );
}
