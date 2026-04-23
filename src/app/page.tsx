import "./manifesto.css";

import Image from "next/image";
import { ColorModeControl } from "@/components/color-mode-control";
import { EdgeTutorIllustration } from "@/components/edge-tutor-illustration";
import { ManifestoStyleToggle } from "@/components/manifesto-style-toggle";

const diagramPrint = `            THE KID · speaks, asks, learns
                    │
                    ▼
            ┌── EDGE TUTOR ────────┐
            │  on-device · offline │
            ├ Model ─┬  Hardware ─┤
            │<3B SLM│ <$50 device │
            ├────── her language ──┤
            │ no Wi-Fi · no server │
            │  no permission needed│
            └──────────────────────┘`;

export default function Home() {
  return (
    <div className="manifesto__shell">
      <aside className="manifesto__rail" aria-hidden="true">
        letter
      </aside>
    <article className="manifesto">
      <p className="manifesto__masthead">
        <strong>AI-Native University</strong>
      </p>

      <h1 className="manifesto__title">
        {/* Education is the shortest path to leadership. */}
        {/* The best teacher in the world should fit in every pocket. */}
        A <strong>university</strong> that comes to you.
      </h1>
      <div className="manifesto__rule" aria-hidden="true" />

      <p className="manifesto__dateline">
        Hanover, NH · April 2026 · Josué Godeme
      </p>

      <p className="manifesto__lead">
        The right goal is not one famous teacher broadcast to every zip
        code. It is education that fits each student: their pace, their
        language, the time they can give. That is{" "}
        <strong>personalized education</strong>, and for most of the world it
        has been out of reach.{" "}
        <strong>Small language models (SLMs)</strong> and{" "}
        <strong>cheap devices</strong> are strong enough to change that. For
        the first time, this kind of <strong>tutoring</strong> can sit in a
        pocket. That is the bet.
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
          Where I’m writing from
        </h2>
        <p>
          I came up in Benin, I study at Dartmouth, and I will go to
          Tsinghua. I ranked first among about 80,000 students on my
          country’s national exam. Every room I have walked into since
          then has been paid for by a scholarship, which is another way to
          say that it was paid for by the belief that education travels.{" "}
          <strong>Education is the thread.</strong>
        </p>
      </section>

      <section className="manifesto__section" aria-labelledby="kicker-building">
        <h2 id="kicker-building" className="manifesto__kicker">
          What I’m building
        </h2>
        <p>
          I am building an <strong>AI-native university</strong>. It is not
          an app. It is not a course. It is not a platform dressed up in{" "}
          <strong>university</strong> clothes. It is a re-architecting of what
          school means when the best tutor in the world fits on a{" "}
          <strong>device</strong> that costs less than a textbook.
        </p>
        <p>
          <strong>SLMs</strong> got good. <strong>Edge hardware</strong> got
          cheap. The bottleneck stopped being technology and became
          conviction.
        </p>
        <p>
          The kids who need this most do not have wifi. The{" "}
          <strong>university</strong> has to come to them, in their language,
          on a device they can already afford. <strong>Offline first</strong>.{" "}
          <strong>Small-language-model native</strong>. Built for Cotonou
          before Cambridge.
        </p>
      </section>

      <div className="manifesto__diagramBlock">
        <p className="sr-only" id="edge-tutor-desc">
          Flow diagram: the learner moves into an on-device, offline edge
          tutor. Model under three billion parameters, hardware under
          fifty dollars, small language model, tutoring in the learner’s
          language. No Wi-Fi, no server, no permission needed.
        </p>
        <div
          className="manifesto__diagramScreen"
          aria-describedby="edge-tutor-desc"
        >
          <EdgeTutorIllustration />
        </div>
        <pre className="manifesto__diagramPrint" aria-hidden="true">
          {diagramPrint}
        </pre>
      </div>

      <section className="manifesto__section" aria-labelledby="kicker-why">
        <h2 id="kicker-why" className="manifesto__kicker">
          Why me
        </h2>
        <p>
          I am the kid this serves. I am also the{" "}
          <strong>researcher</strong> who can build it. I have{" "}
          <strong>shipped</strong> products that real people pay for. I do
          not need permission to start.
        </p>
      </section>

      <p className="manifesto__pullquote">
        Don’t ask what the world needs. Ask what makes you come alive, and
        go do it.
      </p>

      <p className="manifesto__close">
        This is what makes me come alive. I will build it whether this
        round is funded or not. <strong>Funding</strong> only changes the
        clock: more ground covered, more kids, fewer delays.
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
