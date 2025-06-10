import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TestSection = () => {
  const container = useRef<HTMLDivElement>(null)
  // const circle = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Additional animation
      // gsap.to('.test-obj', { scrollTrigger: '.test-obj', x: 500 })

      // gsap.to('.circle', {
      //   scrollTrigger: {
      //     trigger: '.circle',
      //     toggleActions: 'restart pause reverse pause',
      //     start: 'top center',
      //     end: 'top 300px',
      //     scrub: 1,
      //     markers: true,
      //   },
      //   x: 500,
      //   duration: 4,
      // })

      gsap.utils.toArray('.inner-obj').forEach((obj) => {
        ScrollTrigger.create({
          trigger: obj as Element,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          markers: true,
        })
      })
    },
    { scope: container }
  )

  return (
    <div className='tl-cont w-100 h-100 bg-red-500' ref={container}>
      {/* <div className='test-obj w-10 h-10 bg-yellow-500'></div> */}
      {/* <div className='circle w-10 h-10 bg-blue-500' ref={circle}></div> */}
      <div className='inner-obj w-10 h-full bg-white'>asd</div>
      <div className='inner-obj w-10 h-full bg-green-600'>dsa</div>
      TestSection
    </div>
  )
}

export default TestSection
