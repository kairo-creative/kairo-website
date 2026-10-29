"use client";
import Link from "next/link";
import { useLanguage } from "./Language";
import ContactCTA from "./ContactCTA";
import { navigation } from "../content/home";
const Instagram = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true">
    <rect x="4" y="4" width="24" height="24" rx="7" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="24" cy="8" r="1" fill="currentColor" />
  </svg>
);
const Linkedin = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <circle cx="6" cy="7" r="2" />
    <path d="M4 12h4v16H4zm9 0h4v2c2-3 10-4 10 5v9h-4v-9c0-5-6-4-6 0v9h-4z" />
  </svg>
);
const Music2 = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    aria-hidden="true"
  >
    <path d="M19 4v18a5 5 0 1 1-5-5M19 4c1 5 5 7 9 7" />
  </svg>
);
export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact">
      <div className="footer-top">
        <div>
          <p className="eyebrow">{t("Klaar om samen te werken?")}</p>
          <h2>
            {t("Samen jouw visie")} <em>{t("versterken.")}</em>
          </h2>
        </div>
        <ContactCTA />
      </div>
      <div className="footer-middle">
        <nav aria-label={t("Footernavigatie")}>
          {[
            navigation[0],
            navigation[3],
            navigation[1],
            navigation[2],
            navigation[4],
          ].map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="socials" aria-label={t("Sociale kanalen")}>
          <a
            href="https://www.instagram.com/kairocreativeagency/"
            aria-label={t("Instagram (opent in nieuw tabblad)")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.tiktok.com/@kairocreativeagency?lang=nl-NL"
            aria-label={t("TikTok (opent in nieuw tabblad)")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Music2 />
          </a>
          <a
            href="https://www.linkedin.com/in/jill-sances-b3b1991a4/"
            aria-label={t("LinkedIn (opent in nieuw tabblad)")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Kairo Creative Agency. {t("Alle rechten voorbehouden.")}</p>
        <p>
          <span>Privacy</span> · <span>{t("Algemene voorwaarden")}</span>
        </p>
      </div>
      <details id="contact-details" className="contact-details">
        <summary>{t("Contactgegevens")}</summary>
        <p>{t("Contactgegevens worden binnenkort toegevoegd.")}</p>
      </details>
    </footer>
  );
}
