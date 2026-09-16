import { usePageMeta } from "../components/Layout.jsx";
import { Callout, Checks, DataTable, Head, PageHero, Section, Split, Steps, Tag } from "../components/ui.jsx";
import { ScrollButton } from "../components/interactive.jsx";

function ResumeMock() {
  return (
    <div className="resume reveal">
      <div className="score-badge"><b>68</b><span>Resume score</span></div>
      <div className="resume__name">Your Name</div>
      <div className="resume__role">Data Engineer · Technical resume</div>
      <h4>Project experience</h4>
      <ul className="clean">
        <li>Built ingestion job for order events on a client data platform <em>14.5 h tracked</em></li>
        <li>Delivered Airflow DAG for nightly warehouse load, approved in code review <em>Signed off</em></li>
        <li>Implemented data quality checks and alerting <em>22 h tracked</em></li>
      </ul>
      <h4>Completed programs</h4>
      <ul className="clean"><li>Data Engineering — all five sub-modules</li></ul>
      <h4>Skills</h4>
      <div className="chips">{["Python", "SQL", "PySpark", "Airflow", "Snowflake"].map((s) => <span key={s}>{s}</span>)}</div>
    </div>
  );
}

export default function ResumeBuilder() {
  usePageMeta("Resume Builder", "Build resumes directly from your verified program and project record, with a live Resume Score and specific improvement guidance.");

  return (
    <>
      <PageHero
        title="Shape your resume from your real experience"
        lead="Your resume shouldn't be a guess about what you did. It should be a direct pull from a record that already exists — completed programs, project history, tracked hours, tasks, code reviews and sign-offs."
        crumb="Resume Builder"
        eyebrow="Your experience becomes your resume"
        actions={<ScrollButton target="how" light>See how it's built</ScrollButton>}
      />

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>Why it matters</Tag>
            <Split>Most resumes are a list of claims</Split>
            <p>A hiring manager can't easily tell whether "built a full stack e-commerce app" means one small contribution or ownership of the whole build.</p>
            <p>Argomind generates resume bullets from work already tracked on the platform — hours logged, tasks completed, code reviewed and sign-offs recorded. Your resume grows with your actual progress, not with rewritten claims.</p>
            <div className="mt-s"><Checks items={["Experience connected to a project record", "Skills tied to completed learning and project work", "Multiple versions for different applications"]} /></div>
          </div>
          <div style={{ padding: "26px 18px 0 0" }}><ResumeMock /></div>
        </div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="Resume types" title="Choose the type of resume you need" text="Build more than one — for example a technical version for direct applications and an ATS-optimized one for job boards." />
        <DataTable headers={["Resume type", "Best for"]} rows={[
          ["Technical / Skills-based", "Highlights technical stack, tools and project architecture — developer, engineer and technical roles"],
          ["Project-focused", "Leads with real client project outcomes and your specific contributions — portfolio-heavy applications"],
          ["Entry-level / Career-switch", "Emphasizes completed programs, certifications and foundational project work — new to the field"],
          ["Experience-weighted", "Balances prior work history with your Argomind project record — combining past experience with new skills"],
          ["ATS-optimized", "Formatted and keyword-aligned for Applicant Tracking Systems — high-volume online applications"],
        ]} />
      </Section>

      <Section id="how" className="section--white">
        <Head variant="solo" eyebrow="How Argomind builds it" title="Five steps from record to resume" />
        <Steps cols={5} items={[
          ["Select your target role", "Argomind pulls the skills and project types most relevant to that role."],
          ["Choose a resume type", "Technical, project-focused, entry-level, experience-weighted or ATS-optimized."],
          ["Argomind assembles it", "Pulled directly from programs, project history, tracked hours and task contributions."],
          ["Review and refine", "Edit tone and phrasing while the underlying facts stay tied to your record."],
          ["Export or apply", "Download it, or use it immediately through Job Applications."],
        ]} />
      </Section>

      <Section>
        <Head variant="solo" eyebrow="What feeds your resume" title="Built from your existing record" />
        <DataTable headers={["Source", "What it contributes"]} rows={[
          ["Education details", "Your academic background"],
          ["Completed programs", "Training you've completed"],
          ["Skills", "Derived from completed learning and demonstrated project work"],
          ["Real-time project history", "Projects, responsibilities and outcomes from actual project work"],
          ["Tracked hours", "Recorded participation that supports the depth of experience shown"],
          ["Tasks & contributions", "Specific task-level work reflected in project bullets"],
          ["Code reviews & sign-offs", "Review and approval activity that supports credibility"],
        ]} />
      </Section>

      <Section className="section--mist">
        <div className="split-2">
          <div className="copy">
            <Tag>Resume Score</Tag>
            <Split>A score that tells you what to do next</Split>
            <p>Every resume has a live score at the top of the builder, reflecting:</p>
            <div className="mt-s"><Checks items={["Coverage of relevant skills for your target role", "Depth of real-time project experience", "Completeness of project documentation", "ATS compatibility and formatting", "Alignment with a selected job description"]} /></div>
          </div>
          <Callout small="Example recommendation">
            “Your score is 68/100. Completing the Real-Time Project phase in Data Engineering would add project depth. Adding 2 more quantified outcomes to your project descriptions could raise your score by about 10 points.”
          </Callout>
        </div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="Closing gaps" title="Example resume-strengthening actions" />
        <DataTable headers={["Current gap", "Recommended action", "Expected benefit"]} rows={[
          ["Insufficient project depth", "Complete an additional real-time project phase", "Adds depth to demonstrated experience"],
          ["Limited quantified outcomes", "Add outcomes supported by the project record", "Makes project impact clearer"],
          ["Incomplete documentation", "Complete tasks, outcomes and tech-stack documentation", "Creates a stronger project description"],
          ["Skill coverage gap", "Complete relevant learning or project work", "Improves alignment with the role"],
          ["ATS formatting gap", "Generate an ATS-optimized version", "Improves keyword alignment for online applications"],
        ]} />
      </Section>

      <Section className="section--tight">
        <Callout small="Build your skills · Work on real projects · Track your experience · Apply with evidence">
          Don't write what you think you did. Build the experience, record the work, and let the resume reflect it.
        </Callout>
      </Section>
    </>
  );
}
