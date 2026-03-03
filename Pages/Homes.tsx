import Hero from '@/components/Home/Hero'
import { Images } from '@/components/Home/Images'

import Skills from '@/components/Home/Skills'


const Homes = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
        <Hero />
        <Images />
        <Skills />
    
    </div>
  )
}

export default Homes