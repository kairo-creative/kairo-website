"use client";
import { useState } from "react";
import { reviews } from "../content/home";
import { asset } from "../lib/assets";
import { useLanguage } from "./Language";
import Arrow from "./Arrow";
export default function Reviews() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  return (
    <section className="reviews" aria-labelledby="review-title">
      <img
        className="review-image"
        src={asset("/images/client-review-1440.webp")}
        width="1440"
        height="450"
        alt=""
        loading="lazy"
      />
      <div className="review-heading">
        <p className="eyebrow">{t("Klanten review")}</p>
        <h2 id="review-title">
          {t("Vertrouwen in")} <em>{t("creatie.")}</em>
        </h2>
      </div>
      <div className="review-controls">
        <button
          aria-label={t("Vorige review")}
          disabled={reviews.length < 2}
          onClick={() =>
            setIndex((index - 1 + reviews.length) % reviews.length)
          }
        >
          <Arrow left />
        </button>
        <button
          aria-label={t("Volgende review")}
          disabled={reviews.length < 2}
          onClick={() => setIndex((index + 1) % reviews.length)}
        >
          <Arrow />
        </button>
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(reviews.length).padStart(2, "0")}
        </span>
      </div>
      <div className="review-content" aria-live="polite" aria-atomic="true">
        <blockquote>“{t(review.quote)}”</blockquote>
        <div className="review-rule" />
        <p className="review-author">
          {review.author}
          <span>{t(review.role)}</span>
        </p>
      </div>
    </section>
  );
}
