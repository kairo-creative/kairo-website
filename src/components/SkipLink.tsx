"use client";
import { useLanguage } from "./Language";
export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip-link" href="#main">
      {t("Ga naar inhoud")}
    </a>
  );
}
