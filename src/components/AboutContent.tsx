"use client";
import { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "./Language";
import { aboutCopy } from "../content/about";
import { asset } from "../lib/assets";

function ValueIcon({ index }: { index: number }) {
  return (
    <svg
      className="value-icon"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {index === 0 && (
        <>
          {[
            [26, 26],
            [38, 26],
            [26, 38],
            [38, 38],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="11" />
          ))}
          <path d="M20 20l24 24M44 20L20 44" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M32 5l4 22 14-11-11 14 20 2-20 3 11 13-14-11-4 22-4-22-14 11 11-13-20-3 20-2-11-14 14 11z" />
          <path d="M32 15v34M15 32h34" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M9 25l23-13 23 13-23 13zM9 34l23 13 23-13M9 43l23 13 23-13" />
        </>
      )}
      {index === 3 && (
        <>
          <circle cx="32" cy="32" r="9" />
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              d="M32 7v12"
              transform={`rotate(${i * 22.5} 32 32)`}
            />
          ))}
        </>
      )}
    </svg>
  );
}

export default function AboutContent() {
  const { language } = useLanguage();
  const c = aboutCopy[language];
  const hero = useRef<HTMLElement>(null);
  const image = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 760px)",
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      if (image.current)
        image.current.style.transform = `translateY(${mq.matches ? 0 : Math.min(35, Math.max(0, -(hero.current?.getBoundingClientRect().top || 0) * 0.07))}px)`;
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    mq.addEventListener("change", update);
    update();
    return () => {
      window.removeEventListener("scroll", scroll);
      mq.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <>
      <Header />
      <main id="main" className="about-page">
        <section
          ref={hero}
          className="about-hero"
          aria-labelledby="about-title"
        >
          <img
            ref={image}
            src={asset("/images/about/hero.jpg")}
            className="about-hero-image"
            alt=""
            width="1440"
            height="750"
            fetchPriority="high"
          />
          <div className="about-hero-copy">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 id="about-title">
              {c.hero[0]}
              <br />
              {c.hero[1]}
            </h1>
            <div className="about-rule" />
            <p className="about-introduction">{c.introduction}</p>
          </div>
        </section>
        <section
          className="about-quote"
          aria-label={
            language === "nl" ? "Onze overtuiging" : "What we believe"
          }
        >
          <blockquote>
            “{c.quote[0]}
            <br />
            <em>{c.quote[1]}</em>”
          </blockquote>
        </section>
        <section
          className="about-story about-split"
          aria-labelledby="story-title"
        >
          <div className="about-copy">
            <p className="eyebrow">{c.storyLabel}</p>
            <h2 id="story-title">
              {c.storyTitle[0]}
              <br />
              {c.storyTitle[1]} <em>{c.storyTitle[2]}</em>
            </h2>
            {c.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about-image">
            <img
              src={asset("/images/about/story.jpg")}
              alt={c.storyAlt}
              width="720"
              height="560"
              loading="lazy"
            />
          </div>
        </section>
        <section className="about-values" aria-labelledby="values-title">
          <img
            className="about-values-background"
            src={asset("/images/about/values.jpg")}
            width="1460"
            height="500"
            alt=""
            loading="lazy"
          />
          <h2 className="eyebrow" id="values-title">
            {c.valuesLabel}
          </h2>
          <div className="values-grid">
            {c.values.map((value, index) => (
              <article className="value-card" key={index}>
                <ValueIcon index={index} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="about-founder about-split"
          aria-labelledby="founder-title"
        >
          <div className="about-image">
            <img
              src={asset("/images/about/founder.jpg")}
              alt={c.founderAlt}
              width="720"
              height="700"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">{c.founderLabel}</p>
            <h2 id="founder-title">
              {c.founderTitle[0]}
              <br />
              {c.founderTitle[1]}
            </h2>
            {c.founder.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="eyebrow founder-signature">Jill Sances</p>
          </div>
        </section>
        <section className="about-faith" aria-labelledby="faith-title">
          <img
            src={asset("/images/about/faith.jpg")}
            width="1440"
            height="330"
            alt=""
            loading="lazy"
          />
          <div>
            <h2 className="eyebrow" id="faith-title">
              {c.faithLabel}
            </h2>
            <blockquote>
              “
              {c.faith.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < c.faith.length - 1 && <br />}
                </span>
              ))}
              ”
            </blockquote>
            <p className="eyebrow faith-citation">
              <span />
              {c.citation}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
