"use client";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./Language";
import { navigation } from "../content/home";
import { asset } from "../lib/assets";
export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const first = nav.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        const links = Array.from(
          nav.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
        );
        const first = links[0],
          last = links.at(-1);
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          trigger.current?.focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          trigger.current?.focus();
        } else if (document.activeElement === trigger.current) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    const mq = window.matchMedia("(min-width: 761px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", key);
      mq.removeEventListener("change", close);
    };
  }, [open]);
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Kairo Creative — home">
        <img
          src={asset("/images/monogram-cream.png")}
          width="55"
          height="35"
          alt="Kairo Creative"
        />
      </a>
      <nav
        ref={nav}
        id="main-navigation"
        aria-label={t("Hoofdnavigatie")}
        className={open ? "navigation is-open" : "navigation"}
      >
        {navigation.map((item) => (
          <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <LanguageSwitcher />
      <button
        ref={trigger}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
        aria-label={t(open ? "Menu sluiten" : "Menu openen")}
      >
        <span /> <span />
      </button>
    </header>
  );
}
