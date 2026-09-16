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
        lead="Most bootcamps teach you to code and most job boards list openings — but the gap between learning and employment stays open. Argomind builds real client projects into every track."
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
          <Callout small="Foundation → Hands-on practice → Real-time project → Interview & certification prep">
            Every program follows the same four-phase path, so you move from your first lesson to a job-ready portfolio without switching platforms.
          </Callout>
        </div>
      </Section>

      <Section className="section--mist">
        <Head eyebrow="Inside every sub-module" title="What each sub-module includes" text="Everything you need to learn a concept, check it, and practice it — in one place." />
        <Cards cols={4} items={[
          { icon: "clock", title: "Estimated time", text: "A live time-remaining tracker updates as you progress, so you can plan your week." },
          { icon: "file", title: "Graded assignments", text: "Hands-on work that's reviewed and scored, not just marked complete." },
          { icon: "check", title: "Quizzes", text: "Short knowledge checks to confirm the concept stuck before you move on." },
          { icon: "code", title: "Practice Code", text: "One button opens Argo Labs, the in-browser compiler, preloaded for the lesson." },
        ]} />
      </Section>

      <Section id="tracks">
        <Head variant="solo" eyebrow="Choose your track" title="Browse all 14 programs" text="Pick a track to see its sub-modules and estimated hours. Durations are estimates and depend on your pace." />
        <Tabs label="Technology tracks" tabs={TRACKS.map((t, i) => ({ id: t.id, label: t.tab, content: <ProgramPanel track={t} index={i} /> }))} />
      </Section>

      <Section className="section--white">
        <Head variant="solo" eyebrow="The four phases" title="One path in every track" />
        <Steps items={[
          ["Foundation", "Starts from the basics with no prior background assumed in that technology."],
          ["Hands-on practice", "Assignments and exercises you write and run yourself in Argo Labs."],
          ["Real-time project", "Client work with assigned tasks, code reviews, deadlines and tracked hours."],
          ["Interview & certification prep", "Mock interviews matched to real job descriptions, plus certification readiness."],
        ]} />
      </Section>
    </>
  );
}
