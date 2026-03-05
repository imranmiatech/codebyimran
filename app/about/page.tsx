import AboutHero from "@/components/About/AboutHero";
import Enjoy from "@/components/About/Enjoy";
import Experience from "@/components/About/Experience";
import Process from "@/components/Home/Process";

import Testimonials from "@/components/Home/Testimonials";


export default function About() {
  return (
    <main>
      <AboutHero />
      <Enjoy />
      
      <Experience />
      <Process />
      <Testimonials />
    </main>
  );
}