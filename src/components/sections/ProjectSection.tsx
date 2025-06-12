import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useRef } from 'react'

import projectsData from '../../assets/projects.json'
import ProjectCard from '../common/ProjectCard'
import Label from '../common/Label'
import { maxWidth } from '../../config'
import { cn } from '../../lib/utils'

gsap.registerPlugin(ScrollTrigger)

// Import all images from assets directory using Vite's import.meta.glob
const images = import.meta.glob('../../assets/projects/*.(png|jpe?g|svg)', { eager: true }) as Record<
  string,
  { default: string }
>

const getImageUrl = (fileName: string): string => {
  // Find the image path that ends with the filename
  // TODO: add fallback image
  const imagePath = Object.keys(images).find((path) => path.endsWith(`/${fileName}`))
  return imagePath ? images[imagePath].default : ''
}

const ProjectSection = () => {
  const container = useRef<HTMLDivElement>(null)

  // Map the projects with their respective images
  const projects = projectsData.map((project) => ({
    ...project,
    image: getImageUrl(project.image),
  }))

  useGSAP(
    () => {
      // Handle project animations with individual pinning
      gsap.utils.toArray('.project').forEach((obj, index, array) => {
        ScrollTrigger.create({
          trigger: obj as Element,
          start: 'top 50px',
          end: `${index < array.length - 1 ? 'bottom' : 'top'} 50px`,
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
    <section
      id='projects'
      className={cn(`projects py-20 w-full mx-auto px-4 md:px-6 lg:px-8`, maxWidth)}
      ref={container}
    >
      <div className='projects-container relative '>
        <div className='flex justify-center project-title mb-10'>
          <Label>Projects</Label>
        </div>
        <div className='flex flex-col gap-10 w-full top-20 left-0'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
