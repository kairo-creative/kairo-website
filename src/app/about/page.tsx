import type { Metadata } from "next";
import AboutContent from "../../components/AboutContent";
import "./about.css";
export const metadata: Metadata = {
  title: "About — Kairo Creative",
  description:
    "Ontdek het verhaal, de kernwaarden en de oprichtster achter Kairo Creative. Waar ideeën betekenis krijgen.",
};
export default function About() {
  return <AboutContent />;
}
