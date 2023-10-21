import Hero from "@/components/Section/Hero";
import Introduction from "@/components/Section/Introduction";
import Portfolio from "@/components/Section/Portfolio";
import Skill from "@/components/Section/Skill";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="relative z-10">
        <Introduction />
      </section>
      <section className="-mt-20">
        <Skill />
      </section>
      <section>
        <Portfolio />
      </section>
    </main>
  );
}
