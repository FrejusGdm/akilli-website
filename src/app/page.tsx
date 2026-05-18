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
          <a href="#kicker-now">Why now</a>
          <a href="#kicker-why">Why me</a>
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
        <h1 className="manifesto__title">
          <span>A university</span>
          <span>that comes</span>
          <span>to you.</span>
        </h1>

        <p className="manifesto__dateline">
          Hanover, NH · April 2026 · Josué Godeme
        </p>

        <p className="manifesto__lead">
          Personalized education is a loaded idea, especially in the United
          States. I am not trying to win that argument. The place I am building
          for is different. I am thinking about Benin, West Africa, and the
          parts of the world where a student is often not choosing between a
          human teacher and an AI tutor. Many students are choosing between some
          access and no access at all.
        </p>

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
            In the context I care about, the work is more basic than that. It
            is access. It is teacher training. It is infrastructure. It is
            giving an existing classroom, a learning center, or a small kiosk a
            tutor that can sit on a cheap device and work even when the internet
            does not.
          </p>
          <p>
            I am not saying every child should learn alone with a machine. I am
            saying many children are already learning with too little support.
            If AI can help close that gap, then the question is not whether it
            sounds fashionable. The question is whether it helps a real student
            learn.
          </p>
        </section>

        <section className="manifesto__section" aria-labelledby="kicker-building">
          <h2 id="kicker-building" className="manifesto__kicker">
            What I’m building
          </h2>
          <p>
            I am building an <strong>AI-native university</strong>, but the
            first version is not a university in the traditional sense. It
            starts smaller: students around sixth to ninth grade, where weak
            foundations in math, reading, science, and language start to
            compound.
          </p>
          <p>
            The first prototype can start in English because that is the
            fastest way to test the tutoring experience, the voice interface,
            and the offline setup. But English is not the destination. Once the
            core works, it has to move toward local languages. A student should
            learn in the language she thinks in, not the language the internet
            happens to support.
          </p>
          <p>
            The system works like this: a student speaks. The tutor listens. It
            explains, asks questions, gives practice, and adapts. It runs{" "}
            <strong>offline</strong> or close to offline on cheap hardware. No
            perfect Wi-Fi. No permanent English requirement.
          </p>
        </section>

        <section className="manifesto__section" aria-labelledby="kicker-now">
          <h2 id="kicker-now" className="manifesto__kicker">
            What has to be true
          </h2>
          <p>
            I think this takes three things. First, language. Any product can
            start in English, but it cannot stop there. If the student thinks in
            Fon, Yoruba, Mina, Dendi, Bariba, or French mixed with a local
            language, the system has to respect that.
          </p>
          <p>
            Second, voice. A lot of students will not learn by typing into a
            laptop. They need to speak, listen, ask again, and be understood.
            That means voice AI agents that can perform well without depending
            on perfect internet.
          </p>
          <p>
            Third, measurement. Not surveillance. Not dashboards for their own
            sake. Just a clear record of what the student understands, where
            they are stuck, and what a teacher, parent, or mentor should do
            next. Without that, it is just a chatbot. With it, it can become a
            learning system.
          </p>
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
            I have also already started on one of the hardest parts: voice AI
            for low-resource languages with many speakers and very little data
            online. Now the work is operational. How do you get this out of the
            lab and into the hands of students, teachers, and communities on the
            ground?
          </p>
        </section>

        <p className="manifesto__pullquote">
          The question is not whether AI can make education sound impressive.
          The question is whether it can help a real student learn tomorrow.
        </p>

        <p className="manifesto__close">
          There are many ways this can fail. I do not know yet what the
          sustainable business model is. I do not want to pretend that part is
          solved. But I am willing to take that risk and figure it out in the
          open. The vision is a new kind of school: sometimes on a student’s own
          device, sometimes inside a cheap learning kiosk, sometimes inside an
          existing classroom. The point is the same. Bring the best education we
          can build to people who were never supposed to have access to it.
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
