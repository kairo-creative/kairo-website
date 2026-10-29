"use client";
import { useLanguage } from "./Language";
import Arrow from "./Arrow";
export default function ContactCTA() {
  const { t } = useLanguage();
  return (
    <button
      className="button outlined"
      aria-controls="contact-details"
      onClick={() => {
        const details =
          document.querySelector<HTMLDetailsElement>("#contact-details");
        if (details) {
          details.open = true;
          details.querySelector("summary")?.focus();
          details.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
            block: "center",
          });
        }
      }}
    >
      {t("Neem contact op")} <Arrow />
    </button>
  );
}
