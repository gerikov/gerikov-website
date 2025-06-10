import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useRef } from 'react'

import ApexCover from '../../assets/apex-cover.png'
import ProjectCard from '../common/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const ProjectSection = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Handle project animations with individual pinning
      gsap.utils.toArray('.project').forEach((obj, index, array) => {
        ScrollTrigger.create({
          trigger: obj as Element,
          start: 'top 100px',
          end: `${index < array.length - 1 ? 'bottom' : 'top'} 100px`,
          scrub: 1,
          pin: true,
          pinSpacing: false,
          // markers: true,
          onLeave: () => {
            if (index < array.length - 1) {
              gsap.to(obj as Element, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
              })
            }
          },
          onEnterBack: () => {
            gsap.to(obj as Element, {
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
            })
          },
        })
      })
    },
    { scope: container }
  )
  return (
    <section id='projects' className='projects py-20' ref={container}>
      <div className='projects-container relative '>
        <h2 className=' project-title text-3xl font-bold text-stone-900 mb-8'>Projects</h2>
        <div className='flex flex-col gap-10 w-full top-20 left-0'>
          <ProjectCard
            image={ApexCover}
            title='Apex Budapest Conference'
            description='I co-created this site with a friend to support the Apex Budapest conference. It provides key event details—like schedule, speakers, and venue info—along with helpful tips about Budapest, all in a clear and accessible format.'
            link='https://www.apex-budapest.com'
            tags={['Design', 'Figma', 'UI/UX', 'React', 'TypeScript', 'Strapi', 'TailwindCSS']}
          />
          <ProjectCard
            image={ApexCover}
            title='Igna Token Website'
            description="I'm currently redesigning the website for a crypto project focused on plastic recycling through pyrolysis. The goal is to replace the outdated site with a modern, crypto-friendly design that better communicates the project's mission and appeals to the Web3 community."
            tags={['Design', 'Figma', 'UI/UX', 'Next.js', 'TypeScript', 'Strapi', 'TailwindCSS']}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
