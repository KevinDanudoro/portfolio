import Hero from "@/components/section/Hero";
import Introduction from "@/components/section/Introduction";
import Skill from "@/components/section/Skill";

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
      a
    </main>
  );
}
