import Certificate from "@/components/Section/Certificate";
import Hero from "@/components/Section/Hero";
import About from "@/components/Section/About";
import Portfolio from "@/components/Section/Portfolio";
import Skill from "@/components/Section/Skill";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="skills" className="-mt-20">
        <Skill />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
    </main>
  );
}
