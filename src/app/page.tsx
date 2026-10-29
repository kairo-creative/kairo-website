"use client";
import { useLanguage } from "../components/Language";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Arrow from "../components/Arrow";
import { services } from "../content/home";
import { asset } from "../lib/assets";
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
            <Link className="text-link" href="/about/">
              {t("Lees verder")} <Arrow />
            </Link>
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
      <Footer />
    </>
  );
}
