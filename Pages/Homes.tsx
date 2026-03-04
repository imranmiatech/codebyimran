import Blogs from '@/components/Home/Blogs'
import Clients from '@/components/Home/Clients'
import Hero from '@/components/Home/Hero'
import Process from '@/components/Home/Process'
import Projects from '@/components/Home/Projects'
// import { Images } from '@/components/Home/Images'
import ScrollImages from '@/components/Home/Scrollimages'
import Services from '@/components/Home/Services'
import { blogData } from "@/components/Home/BlogData";
import Skills from '@/components/Home/Skills'
import Testimonials from '@/components/Home/Testimonials'


const Homes = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
        <Hero />
        <ScrollImages />
        {/* <Images /> */}
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Clients />
        <Blogs blogs={blogData} />
    </div>
  )
}

export default Homes