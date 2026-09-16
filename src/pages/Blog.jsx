import { useMemo, useState } from "react";
import { usePageMeta } from "../components/Layout.jsx";
import { Callout, PageHero, Section, Strong } from "../components/ui.jsx";
import { BLOG } from "../data/blog.js";
import aiSummit from "../assets/ai-summit.jpg";
import conferenceHall from "../assets/conference-hall.jpg";

export default function Blog() {
  usePageMeta("Blog", "Curated articles on hiring trends, interviews, and every Argomind technology track.");
  const [category, setCategory] = useState("all");

  const allPosts = useMemo(() => BLOG.flatMap((c) => c.posts.map((p) => ({ ...p, category: c.category }))), []);
  const visible = category === "all" ? allPosts : allPosts.filter((p) => p.category === category);
  const total = allPosts.length + 1; // + featured article

  return (
    <>
      <PageHero
        title="Stay sharp between sessions"
        lead="Curated reads on the tools, trends and skills shaping the technologies you're learning — each one connected to what you're building in your courses and projects."
        crumb="Blog"
        eyebrow={`${total} articles across ${BLOG.length} topics`}
        image={conferenceHall}
      />

      <Section className="section--mist">
        {/* Featured article */}
        <div className="featured reveal">
          <img src={aiSummit} alt="A speaker on stage at a large technology summit" loading="lazy" />
          <div className="featured__body">
            <span className="article__cat">Trending now · Hiring trends</span>
            <h2>AI hiring goes mainstream: what recruiters are actually screening for</h2>
            <p>AI now touches nearly every stage of hiring, from resume screening to interview scheduling — and recruiters are increasingly focused on catching AI-generated resume exaggeration and verifying that candidates can back up what's on paper.</p>
            <p><Strong>What this means for you:</Strong> a tracked project record and the ability to explain your work in your own words matter more than ever.</p>
          </div>
        </div>

        <div className="chip-filter" role="group" aria-label="Filter articles by topic">
          {["all", ...BLOG.map((c) => c.category)].map((c) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c === "all" ? "All" : c}
            </button>
          ))}
        </div>
        <p className="muted" style={{ margin: "-18px 0 22px", fontSize: ".92rem" }} aria-live="polite">{visible.length} articles shown</p>

        {/* TODO: link cards to article pages once articles are written */}
        <div className="articles">
          {visible.map((p) => (
            <article className="article" key={p.title}>
              <span className="article__cat">{p.category}</span>
              <h3>{p.title}</h3>
              {p.summary && <p>{p.summary}</p>}
              <div className="article__foot"><span>Coming soon</span></div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="section--tight">
        <Callout small="Why we curate these">
          Technology moves fast, and course content alone can't keep up in real time. These short, practical reads build the kind of current awareness that shows up naturally in interviews.
        </Callout>
      </Section>
    </>
  );
}
