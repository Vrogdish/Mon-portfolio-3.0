import About from "@/modules/about/About";
import HeroTop from "@/modules/hero-top/HeroTop";
import Projects from "@/modules/projects/Projects";

export default function Home() {
  return (
    <main >
      <HeroTop/>
      <About/>
      <Projects/>
    </main>
  )
}
