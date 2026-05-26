import "./manifesto.css";

import Image from "next/image";
import Link from "next/link";
import { ColorModeControl } from "@/components/color-mode-control";

export default function Home() {
  return (
    <div className="manifesto__shell">
      <header className="manifesto__top" aria-label="Site navigation">
        <Link className="manifesto__mark" href="/" aria-label="Akilli home">
          <span />
          <span />
        </Link>
        <nav className="manifesto__nav" aria-label="Page sections">
          <a href="#kicker-from">Context</a>
          <a href="#kicker-building">Build</a>
          <a href="#kicker-now">Pillars</a>
          <a href="#kicker-why">Why me</a>
          <a href="#kicker-vision">Vision</a>
        </nav>
        <span className="manifesto__menu" aria-hidden="true">
          <span />
          <span />
        </span>
      </header>
      <aside className="manifesto__rail" aria-hidden="true">
        Akilli
      </aside>
      <article className="manifesto">
        <div className="manifesto__intro">
          <h1 className="manifesto__title">
            <span>I am building an</span>
            <span>AI-native university.</span>
          </h1>

          <p className="manifesto__dateline">
            Hanover, NH · April 2026 · Josué Godeme
          </p>

          <p className="manifesto__lead">
            Sub-Saharan Africa is short millions of teachers. Too many students
            still have no real access to education—not a weak school, but none. I
            believe in education. I have seen what it does when it reaches the
            right person at the right time. I am building an AI-native university
            because talent is everywhere and the teachers, the classrooms, and
            the infrastructure are not.
          </p>
        </div>

        <figure className="manifesto__hero">
          <div className="manifesto__heroFrame">
            <Image
              src="/hero-notion-africa.png"
              alt="Notion-style illustration of a student and mentor learning beside a low-cost device, with Africa and West Africa on a wall map."
              fill
              className="manifesto__heroImg"
              sizes="(max-width: 768px) 100vw, min(100%, 60rem)"
              priority
            />
          </div>
        </figure>

        <section className="manifesto__section" aria-labelledby="kicker-from">
          <h2 id="kicker-from" className="manifesto__kicker">
            Let me give you a little context.
          </h2>
          <p>
            Personalized education is a loaded idea in the United States. I am
            not trying to win that argument. The place I am building for is
            different: Benin, West Africa, and much of Sub-Saharan Africa, where
            a student is often not choosing between a human teacher and an AI
            tutor. Many are choosing between some access and no access at all.
          </p>
          <p>
            In the context I care about, the work is more basic than that. It is
            access. It is teacher training. It is infrastructure. It is giving
            an existing classroom, a learning center, or a small kiosk a tutor
            that can sit on a cheap device and work even when the internet does
            not.
          </p>
          <p>
            Many children are already learning with too little support. I want to
            know whether AI can actually help a real student learn—not whether
            it sounds fashionable.
          </p>
        </section>

        <section
          className="manifesto__section"
          aria-labelledby="kicker-building"
        >
          <h2 id="kicker-building" className="manifesto__kicker">
            What I’m building
          </h2>
          <p>
            An <strong>AI-native university</strong>—but the first version is not
            a university in the traditional sense. It starts smaller: students
            around sixth to ninth grade, where weak foundations in math, reading,
            science, and language start to compound.
          </p>
          <p>
            A student speaks. The tutor listens. It explains, asks questions,
            gives practice, and adapts—through voice, powered by edge AI on cheap
            hardware. The first prototype can start in English because that is
            the fastest way to test the tutoring experience and the offline
            setup. But English is not the destination. Once the core works, it
            has to move toward local languages. A student should learn in the
            language she thinks in, not the language the internet happens to
            support.
          </p>
          <p>
            Where teachers and classrooms already exist, they stay central. Where
            they are absent, the tutor augments access—filling a gap that no
            hiring spree can close overnight.
          </p>
        </section>

        <section className="manifesto__section" aria-labelledby="kicker-now">
          <h2 id="kicker-now" className="manifesto__kicker">
            What has to be true
          </h2>
          <ol className="manifesto__list">
            <li>
              <strong>Language.</strong> Any product can start in English, but it
              cannot stop there. If the student thinks in Fon, Yoruba, Mina,
              Dendi, Bariba, or French mixed with a local language, it is
              crucial that local languages are integrated into this.
            </li>
            <li>
              <strong>Voice.</strong> Many students will not learn by typing into
              a laptop. They speak, listen, ask again, and deserve to be
              understood. That means voice interfaces powered by edge AI—fast
              enough to feel like conversation, not a demo.
            </li>
            <li>
              <strong>Knowledge representation.</strong> A clear picture of what
              the student understands, where they are stuck, and what a teacher,
              parent, or mentor should do next. That is what turns a chatbot into
              a learning system.
            </li>
            <li>
              <strong>Offline.</strong> No perfect Wi‑Fi. No always-on cloud. The
              tutor has to run on cheap hardware in a classroom, a kiosk, or a
              village with intermittent connectivity—because that is where the
              students are.
            </li>
          </ol>
        </section>

        <section className="manifesto__section" aria-labelledby="kicker-why">
          <h2 id="kicker-why" className="manifesto__kicker">
            Why me
          </h2>
          <p>
            I grew up in Benin. I study at Dartmouth. I am going to Tsinghua
            next. Education has carried me across countries, languages, and
            institutions. I ranked first among about 80,000 students on my
            country’s national exam, and every major room I have entered since
            then has been opened by a scholarship. That shaped how I see
            education. <strong>Talent is everywhere. Access is not.</strong>
          </p>
          <p>
            I have also already started on one of the hardest parts: voice
            systems for low-resource languages with many speakers and very little
            data online. Now the work is operational. How do you get this out of
            the lab and into the hands of students, teachers, and communities on
            the ground?
          </p>
        </section>

        <section
          className="manifesto__section"
          aria-labelledby="kicker-vision"
        >
          <h2 id="kicker-vision" className="manifesto__kicker">
            The vision
          </h2>
          <p>
            The end goal is <strong>autonomous learning spaces</strong>—places
            where students learn at their own pace, with high standards and real
            support, not lectures. Alpha School showed what is possible when you
            give kids that kind of room to move. I am not copying Austin into
            Cotonou. I am adapting the idea for Sub-Saharan Africa: voice-first
            tutors running on edge AI, on cheap devices, inside communities that
            already exist.
          </p>
          <figure className="manifesto__hero manifesto__hero--inline">
            <div className="manifesto__heroFrame">
              <Image
                src="/hero-autonomous-learning-space.png"
                alt="Etched illustration of students learning at their own pace in a West African autonomous learning space, with books, a small AI tutor device, and a map of Africa on the wall."
                fill
                className="manifesto__heroImg"
                sizes="(max-width: 768px) 100vw, min(100%, 60rem)"
              />
            </div>
          </figure>
          <p>
            Sometimes on a student’s own device. Sometimes inside a cheap
            learning kiosk. Sometimes inside an existing classroom. The point is
            the same: autonomous spaces that bring the best education we can
            build to people who were never supposed to have access to it.
          </p>
        </section>

        <p className="manifesto__pullquote">
          I believe in education. Sub-Saharan Africa is short millions of
          teachers. That is the work.
        </p>

        <p className="manifesto__close">
          There are many ways this can fail. I do not know yet what the
          sustainable business model is. I do not want to pretend that part is
          solved. But I am willing to take that risk and figure it out in the
          open. If you are a teacher, a builder, or someone who cares about
          education in Africa, I would like to hear from you.
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
      </div>
    </div>
  );
}
