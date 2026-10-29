"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./Language";
export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <div
      className="language-picker"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false);
      }}
    >
      <button
        ref={trigger}
        className="language"
        aria-expanded={open}
        aria-controls="language-options"
        aria-label={
          language === "nl"
            ? "Taal kiezen, huidige taal Nederlands"
            : "Choose language, current language English"
        }
        onClick={() => setOpen(!open)}
      >
        {language.toUpperCase()}
        <svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true">
          <path d="m1 2 9 8 9-8" stroke="currentColor" fill="none" />
        </svg>
      </button>
      {open && (
        <div
          id="language-options"
          className="language-options"
          role="group"
          aria-label={language === "nl" ? "Taal" : "Language"}
        >
          {(["nl", "en"] as const).map((value, index) => (
            <button
              key={value}
              ref={index === 0 ? first : undefined}
              lang={value}
              aria-pressed={language === value}
              onClick={() => {
                setLanguage(value);
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <span>{value.toUpperCase()}</span>
              <span>{value === "nl" ? "Nederlands" : "English"}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
