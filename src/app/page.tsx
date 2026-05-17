import "./manifesto.css";

import Image from "next/image";
import { ColorModeControl } from "@/components/color-mode-control";
import { ManifestoStyleToggle } from "@/components/manifesto-style-toggle";

export default function Home() {
  return (
    <div className="manifesto__shell">
      <aside className="manifesto__rail" aria-hidden="true">
        letter
      </aside>
    <article className="manifesto">
      <h1 className="manifesto__title">
        AI-Native
        <br />
        University
      </h1>

      <p className="manifesto__dateline">
        Hanover, NH · April 2026 · Josué Godeme
      </p>

      <p className="manifesto__lead">
        Most online education assumes the student has a laptop, reliable
        Wi-Fi, strong English, quiet hours, and the ability to adapt to the
        system. Most students in the world do not live in that reality. I
        am building for them — starting with an{" "}
        <strong>offline, voice-first AI tutor</strong> that runs on a
        low-cost device and works without Wi-Fi. The long-term vision is
        an <strong>AI-native university</strong>: a school built around the
        learner instead of the classroom.
      </p>

      <figure className="manifesto__hero">
        <div className="manifesto__heroFrame">
          <Image
            src="/hero-editorial-garden.png"
            alt="Adult and child at a table outdoors, learning together with a small computer."
            fill
            className="manifesto__heroImg"
            sizes="(max-width: 768px) 100vw, min(100%, 60rem)"
            loading="lazy"
          />
        </div>
      </figure>

      <section className="manifesto__section" aria-labelledby="kicker-from">
        <h2 id="kicker-from" className="manifesto__kicker">
          Where this comes from
        </h2>
        <p>
          I grew up in Benin. I study at Dartmouth. I am going to Tsinghua
          next. Education has carried me across countries, languages, and
          institutions. I ranked first among about 80,000 students on my
          country’s national exam, and every major room I have entered
          since then has been opened by a scholarship. That shaped how I
          see education.{" "}
          <strong>Talent is everywhere. Access is not.</strong>
        </p>
      </section>

      <section className="manifesto__section" aria-labelledby="kicker-building">
        <h2 id="kicker-building" className="manifesto__kicker">
          What I’m building
        </h2>
        <p>
          I am starting with the tutor. The first prototype will be{" "}
          <strong>in English</strong> — that is the fastest way to test the
          tutoring experience, the voice interface, and the offline setup.
          But English is not the destination. Once the core system works,
          I will move into <strong>local languages</strong>, where the need
          is greatest. A student should learn in the language she thinks
          in, not the language the internet happens to support.
        </p>
        <p>
          The system works like this: a student speaks. The tutor listens.
          It explains, asks questions, gives practice, and adapts. It runs{" "}
          <strong>offline</strong> on cheap hardware. No Wi-Fi. No server.
          No permanent English requirement.
        </p>
        <p>
          The technical bet is that <strong>small language models</strong>{" "}
          are now good enough, and <strong>edge devices</strong> are now
          cheap enough, to make this possible. The human bet is that a
          child should not have to translate herself before she can learn.
        </p>
      </section>

      <section className="manifesto__section" aria-labelledby="kicker-now">
        <h2 id="kicker-now" className="manifesto__kicker">
          Why now
        </h2>
        <p>
          For years, personalized tutoring was too expensive to scale. AI
          changes that — but most AI education tools are still built for
          students who already have access: good devices, stable internet,
          dominant languages. The goal is not to put a chatbot inside
          school. It is to rethink what school can become when every
          learner can have a patient tutor in their pocket.
        </p>
      </section>

      <section className="manifesto__section" aria-labelledby="kicker-why">
        <h2 id="kicker-why" className="manifesto__kicker">
          Why me
        </h2>
        <p>
          I am the kid this is meant to serve. I am also the{" "}
          <strong>builder</strong> and <strong>researcher</strong> who can
          start building it. I have worked on low-resource language AI,
          shipped products real people use, and spent years thinking about
          what education looks like when the default assumptions are
          wrong. I do not need permission to begin.
        </p>
      </section>

      <p className="manifesto__pullquote">
        Don’t ask what the world needs. Ask what makes you come alive, and
        go do it.
      </p>

      <p className="manifesto__close">
        This is what makes me come alive. I do not know the final payment
        model yet — it may involve governments, families, foundations,
        schools, or some mix. But the first question is not who pays. It
        is whether this can help a student learn. That is what I am
        testing first. <strong>Funding</strong> only changes the clock:
        more ground covered, more kids, fewer delays. I am building this
        either way.
      </p>

      <p className="manifesto__signoff">- Josué</p>

      <p className="manifesto__contact">
        <a href="mailto:josue.f.godeme.26@dartmouth.edu">
          josue.f.godeme.26@dartmouth.edu
        </a>
      </p>
    </article>
    <div className="manifesto__floatingControls">
      <ColorModeControl />
      <ManifestoStyleToggle />
    </div>
    </div>
  );
}
