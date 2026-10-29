"use client";
import Arrow from "./Arrow";
export default function ContactCTA() {
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
      Neem contact op <Arrow />
    </button>
  );
}
