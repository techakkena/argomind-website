import { usePageMeta } from "../components/Layout.jsx";
import { Callout, Cards, DataTable, Head, PageHero, Section } from "../components/ui.jsx";
import { ArgoLab, ScrollButton } from "../components/interactive.jsx";

const ENVIRONMENTS = [
  ["Python Development", "Python 3, Flask/Django sandboxes"],
  ["Java Full Stack", "Java, Spring Boot, SQL"],
  ["Data Engineering", "Python, SQL, PySpark"],
  ["DevOps Engineering", "Shell scripting, Dockerfile/YAML editors"],
  [".NET Development", "C#, ASP.NET Core, SQL Server"],
  ["Salesforce Development", "Apex, LWC (HTML/JS/CSS)"],
  ["SAP Development", "ABAP"],
  ["Oracle Development", "SQL, PL/SQL"],
  ["Workday Development", "EIB/Studio configuration sandboxes"],
  ["AI/ML Development", "Python, TensorFlow/PyTorch, notebook-style environments"],
  ["Cloud Engineering", "CLI sandboxes (AWS/Azure/GCP), Terraform"],
  ["Data Analytics & BI", "SQL, Python, Power BI/Tableau connectors"],
  ["Cybersecurity", "Linux shell, network simulation tools"],
  ["QA Automation", "Selenium scripts, API testing"],
];

export default function ArgoLabs() {
  usePageMeta("Argo Labs", "Argo Labs is Argomind's in-browser compiler: pre-configured environments for every track, with no setup.");

  return (
    <>
      <PageHero
        title="Your workspace to write, run and test code — right now"
        lead="Argo Labs is the built-in compiler where every lesson, assignment and project comes to life. No setup, no installs. Select a technology, pick a project, and start writing code that runs in your browser."
        crumb="Argo Labs"
        eyebrow="In-browser compiler"
        actions={<ScrollButton target="try" light>Try it now</ScrollButton>}
      />

      <Section className="section--mist">
        <Head eyebrow="What it does" title="Everything a real dev loop needs" text="The same write, run and debug loop you'll use in a professional environment." />
        <Cards numbered items={[
          { icon: "code", title: "Write & compile instantly", text: "Code across multiple languages and frameworks with immediate output, errors and logs." },
          { icon: "rocket", title: "Zero setup", text: "Select a technology to open a pre-configured environment — nothing to install, nothing to break." },
          { icon: "layers", title: "Projects load in", text: "Existing or self-created projects load their starter code and architecture directly into your workspace." },
          { icon: "bug", title: "Debug in real time", text: "Run and test your code as you write it, the same loop as a professional dev environment." },
          { icon: "shield", title: "Nothing is lost", text: "Save and resume anytime. Your work persists between sessions automatically." },
          { icon: "target", title: "One button, everywhere", text: "Every Practice Code link across every lesson, sub-module and project leads directly here." },
        ]} />
      </Section>

      <Section id="try">
        <Head variant="solo" eyebrow="Try it now" title="This is your compiler space" text="Edit the starter snippet and press Run (or Ctrl + Enter). JavaScript runs for real in your browser in this demo." />
        <ArgoLab />
      </Section>

      <Section className="section--white">
        <Head variant="solo" eyebrow="Supported environments" title="Every track gets its own sandbox" text="No environment setup required — pick the track and the tools are already there." />
        <DataTable headers={["Track", "Languages / tools available in Argo Labs"]} rows={ENVIRONMENTS} />
      </Section>

      <Section>
        <Callout small="Every lesson says Practice Code. Every project says Practice Code. This is where that button always leads.">
          Reading about code isn't the same as writing it. By the time you reach a real client project, running code, debugging errors and shipping working software already feels familiar.
        </Callout>
      </Section>
    </>
  );
}
