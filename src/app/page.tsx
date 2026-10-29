"use client";
import { useLanguage } from "../components/Language";
import Header from "../components/Header";
import ContactCTA from "../components/ContactCTA";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Arrow from "../components/Arrow";
import { services, navigation } from "../content/home";
import { asset } from "../lib/assets";
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
export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <div id="home" />
      <Header />
      <main id="main">
        <Hero />
        <section className="intro" id="about" aria-labelledby="intro-title">
          <h2 id="intro-title">
            {t("Ontworpen met intentie.")}
            <br />
            {t("Gebouwd voor")} <em>{t("impact.")}</em>
          </h2>
          <div className="intro-body">
            <p>
              {t(
                "Kairo Creative is een branding- en designbureau dat merken helpt hun visie tot leven te brengen. Met strategisch denken, creatieve direction en een duidelijke visuele identiteit creëren we merken die impact maken en blijven hangen.",
              )}
            </p>
            <a className="text-link" href="#contact">
              {t("Lees verder")} <Arrow />
            </a>
          </div>
        </section>
        <section
          className="services"
          id="services"
          aria-label={t("Onze diensten")}
        >
          <span id="work" className="anchor-target" />
          {services.map((service, index) => (
            <a
              href="#contact"
              className="service-card"
              key={service.number}
              aria-label={`${service.title} — ${t("neem contact op")}`}
            >
              <img
                src={asset(`/images/${service.image}-1440.webp`)}
                srcSet={`${asset(`/images/${service.image}-640.webp`)} 640w, ${asset(`/images/${service.image}-1440.webp`)} 1440w`}
                sizes="(max-width:760px) 100vw, 33vw"
                alt={t(service.alt)}
                width="480"
                height="612"
                loading="lazy"
              />
              {index === 0 && (
                <p className="eyebrow service-label">{t("Onze diensten")}</p>
              )}
              <div className="service-caption">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{t(service.description)}</p>
                <span className="text-link">
                  {t("Lees verder")} <Arrow />
                </span>
              </div>
            </a>
          ))}
        </section>
        <Reviews />
      </main>
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
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
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
    </>
  );
}
