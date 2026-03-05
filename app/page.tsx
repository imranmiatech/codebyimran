import { blogData } from "@/components/Home/BlogData";
import Blogs from "@/components/Home/Blogs";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import ScrollImages from "@/components/Home/Scrollimages";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="">

        <Hero />
        <ScrollImages />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Clients />
        <Blogs blogs={blogData} />
    </div>
  );
}
