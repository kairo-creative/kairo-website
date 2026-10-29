"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "nl" | "en";
const english: Record<string, string> = {
  "Ga naar inhoud": "Skip to content",
  Hoofdnavigatie: "Main navigation",
  Footernavigatie: "Footer navigation",
  "Sociale kanalen": "Social channels",
  "Menu openen": "Open menu",
  "Menu sluiten": "Close menu",
  "Wij brengen merken tot leven met": "We bring brands to life through",
  "doordacht design, creative direction":
    "thoughtful design, creative direction",
  "en visuele storytelling.": "and visual storytelling.",
  "Bekijk ons werk": "View our work",
  "Onze services": "Our services",
  "Onze diensten": "Our services",
  "Ontworpen met intentie.": "Designed with intention.",
  "Gebouwd voor": "Built for",
  "impact.": "impact.",
  "Kairo Creative is een branding- en designbureau dat merken helpt hun visie tot leven te brengen. Met strategisch denken, creatieve direction en een duidelijke visuele identiteit creëren we merken die impact maken en blijven hangen.":
    "Kairo Creative is a branding and design agency that helps brands bring their vision to life. Through strategic thinking, creative direction and a distinctive visual identity, we create brands that make an impact and leave a lasting impression.",
  "Lees verder": "Read more",
  "neem contact op": "get in touch",
  "Strategie · Visuele Identiteit · Logo’s · Brand Systemen":
    "Strategy · Visual Identity · Logos · Brand Systems",
  "Grafische Vormgeving · Packaging · Print · Digitaal":
    "Graphic Design · Packaging · Print · Digital",
  "Concept · Art direction · Visuele storytelling · Campagnes":
    "Concept · Art Direction · Visual Storytelling · Campaigns",
  "Kairo Creative merkidentiteit op een tablet":
    "Kairo Creative brand identity on a tablet",
  "Golden Angel Society website op een tablet":
    "Golden Angel Society website on a tablet",
  "Creatief werk achter een laptop in warm zonlicht":
    "Creative work at a laptop in warm sunlight",
  "Klanten review": "Client review",
  "Vertrouwen in": "Confidence in",
  "creatie.": "creativity.",
  "Vorige review": "Previous review",
  "Volgende review": "Next review",
  "De samenwerking met Kairo Creative was zo fijn. Er wordt echt met je meegedacht en alles is tot in detail verzorgd. Mijn merk voelt nu echt als mij. Professioneel, creatief en heel betrokken!":
    "Working with Kairo Creative was such a pleasure. They really think along with you and take care of every detail. My brand now truly feels like me. Professional, creative and deeply committed!",
  Ondernemer: "Entrepreneur",
  "Klaar om samen te werken?": "Ready to work together?",
  "Samen jouw visie": "Bringing your vision",
  "versterken.": "to life.",
  "Neem contact op": "Get in touch",
  "Alle rechten voorbehouden.": "All rights reserved.",
  "Algemene voorwaarden": "Terms and conditions",
  Contactgegevens: "Contact details",
  "Contactgegevens worden binnenkort toegevoegd.":
    "Contact details will be added soon.",
  "Instagram (opent in nieuw tabblad)": "Instagram (opens in a new tab)",
  "TikTok (opent in nieuw tabblad)": "TikTok (opens in a new tab)",
  "LinkedIn (opent in nieuw tabblad)": "LinkedIn (opens in a new tab)",
};
const LanguageContext = createContext({
  language: "nl" as Language,
  setLanguage: (_: Language) => {},
  t: (text: string) => text,
});
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setValue] = useState<Language>("nl");
  useEffect(() => {
    try {
      if (localStorage.getItem("kairo-language") === "en") setValue("en");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const setLanguage = (value: Language) => {
    setValue(value);
    try {
      localStorage.setItem("kairo-language", value);
    } catch {}
  };
  const t = (text: string) =>
    language === "en" ? (english[text] ?? text) : text;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
export const useLanguage = () => useContext(LanguageContext);
