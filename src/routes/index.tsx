import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  LearningAndAchievements,
  Navbar,
  Projects,
  RevealObserver,
  Skills,
} from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syed Ali Sultan | Software Developer" },
      { name: "description", content: "Portfolio of Syed Ali Sultan, a Software Engineering student and Software Developer focused on web and mobile applications, backend development, AI/ML, and data analysis." },
      { property: "og:title", content: "Syed Ali Sultan | Software Developer" },
      { property: "og:description", content: "Software Developer building web and mobile applications, exploring AI/ML, and turning ideas into software." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <LearningAndAchievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
