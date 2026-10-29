"use client";
import { useEffect, useRef } from "react";
import { asset } from "../lib/assets";
import Arrow from "./Arrow";
export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const image = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 760px)",
    );
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      if (image.current) {
        const y = mq.matches
          ? 0
          : Math.min(
              40,
              Math.max(
                0,
                -(section.current?.getBoundingClientRect().top || 0) * 0.08,
              ),
            );
        image.current.style.transform = `translateY(${y}px)`;
      }
    };
    const scroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) scroll();
    });
    if (section.current) observer.observe(section.current);
    window.addEventListener("scroll", scroll, { passive: true });
    mq.addEventListener("change", update);
    update();
    return () => {
      window.removeEventListener("scroll", scroll);
      mq.removeEventListener("change", update);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section ref={section} className="hero" aria-labelledby="hero-title">
      <img
        ref={image}
        className="hero-image"
        src={asset("/images/home-hero-1440.webp")}
        alt=""
        width="1440"
        height="900"
        fetchPriority="high"
      />
      <div className="hero-copy">
        <p className="eyebrow">Kairo Creative Agency</p>
        <h1 id="hero-title">
          Creativity
          <br />
          in God’s Timing.
        </h1>
        <p className="hero-description">
          Wij brengen merken tot leven met
          <br className="desktop-break" /> doordacht design, creative direction
          <br className="desktop-break" /> en visuele storytelling.
        </p>
        <div className="hero-actions">
          <a className="button filled" href="#work">
            Bekijk ons werk <Arrow />
          </a>
          <a className="button outlined" href="#services">
            Onze services <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
