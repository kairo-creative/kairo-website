import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "./globals.css";
import { LanguageProvider } from "../components/Language";
import SkipLink from "../components/SkipLink";
const seasons = localFont({
  src: [
    {
      path: "../fonts/theseasons-regular-demo.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/theseasons-light-italic-demo.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-seasons",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Kairo Creative — Creativity in God’s Timing",
  description:
    "Kairo Creative brengt merken tot leven met doordacht design, creative direction en visuele storytelling.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={seasons.variable}>
      <body>
        <LanguageProvider>
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
