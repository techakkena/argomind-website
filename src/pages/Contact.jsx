import { Link } from "react-router-dom";
import { usePageMeta } from "../components/Layout.jsx";
import { Button, DataTable, Head, Icon, PageHero, Section, Split, Tag } from "../components/ui.jsx";
import { DemoForm, Field } from "../components/interactive.jsx";

const CATEGORIES = ["General question", "Technical support", "Billing / enrollment", "Mentor feedback", "Partnerships / media", "Hiring or client project", "Report a bug"];

export default function Contact() {
  usePageMeta("Contact", "Contact Argomind by email, live chat or the contact form. Most inquiries get a reply within one business day.");

  return (
    <>
      <PageHero
        title="Get in touch"
        lead="Questions about a track, billing, a partnership, or a client project? Send us a message — most inquiries get a reply within one business day."
        crumb="Contact"
        eyebrow="We read every message"
      />

      <Section className="section--mist">
        <div className="split-2 split-2--top">
          <div>
            <Tag>Contact details</Tag>
            <Split style={{ marginBottom: 22 }}>Talk to the right team</Split>
            <div className="info-list">
              <div className="info reveal"><div className="card__icon"><Icon name="mail" /></div><div><strong>Email</strong><a href="mailto:info@argomind.ai">info@argomind.ai</a><p>Replies within one business day</p></div></div>
              <div className="info reveal"><div className="card__icon"><Icon name="chat" /></div><div><strong>Live chat</strong><p>Staffed during business hours. The AI support assistant answers common questions 24/7 and hands off to a person when needed.</p></div></div>
              <div className="info reveal"><div className="card__icon"><Icon name="flag" /></div><div><strong>Urgent issues</strong><p>Blocked on a live client project or have a payment problem? Choose the matching category — these are flagged for same-day response.</p></div></div>
              <div className="info reveal"><div className="card__icon"><Icon name="brief" /></div><div><strong>Employers & clients</strong><p>Hiring verified talent or discussing a technology project? Choose Partnerships and we'll route you to the right team. <Link to="/services">See services</Link></p></div></div>
            </div>
          </div>

          <DemoForm title="Send us a message" intro="All fields are required unless marked optional." submitLabel="Send message">
            <Field id="c-name" label="Name"><input id="c-name" autoComplete="name" required /></Field>
            <Field id="c-email" label="Email"><input id="c-email" type="email" autoComplete="email" required /></Field>
            <Field id="c-cat" label="Category">
              <select id="c-cat" required defaultValue="">
                <option value="">Choose a category</option>
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field id="c-subject" label="Subject"><input id="c-subject" required /></Field>
            <Field id="c-msg" label="Message" full><textarea id="c-msg" required /></Field>
            <Field id="c-file" label="Attachment" optional="optional" full><input id="c-file" type="file" /></Field>
          </DemoForm>
        </div>
      </Section>

      <Section>
        <Head variant="solo" eyebrow="Which channel?" title="Get to the right place faster" />
        <DataTable headers={["Reason", "Best channel", "Response time"]} rows={[
          ["General questions", "Contact form or live chat", "Within 1 business day"],
          ["Technical support", "Live chat or help center ticket", "Live chat: during business hours"],
          ["Billing / enrollment", "Contact form (Billing)", "Same day if you're blocked on payment"],
          ["Mentor or reviewer concerns", "Contact form (Mentor feedback)", "Within 1 business day"],
          ["Media / partnerships", "Contact form (Partnerships)", "Within 1 business day"],
          ["Report a bug", "Support feedback form or contact form", "Within 1 business day"],
        ]} />
        <div className="mt-m center"><Button to="/support">Visit the help center</Button></div>
      </Section>
    </>
  );
}
