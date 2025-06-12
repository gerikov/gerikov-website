import { maxWidth } from '../../config'
import { cn } from '../../lib/utils'
import ScrambleText from '../common/ScrambleText'

const HeroSection = () => {
  return (
    <>
      <section
        className={cn(
          'w-full mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center border-stone-800 px-4 md:px-6 lg:px-8',
          maxWidth
        )}
      >
        <div className=' w-full min-h-[calc(100vh-4rem)] border-r border-l border-stone-800 flex flex-col justify-center items-center'>
          <h1 className='md:text-4xl text-3xl font-bold text-white mb-4 text-center'>
            <ScrambleText text='A frontend developer who' className='text-primary text-center' scrambleSpeed={80} />
          </h1>
          <div className='flex flex-col items-center space-y-1 md:space-y-2'>
            <ScrambleText
              text='designs with purpose'
              className='md:text-xl text-lg text-text-alter'
              scrambleSpeed={150}
              delay={1000}
            />
            <ScrambleText
              text='codes with precision'
              className='md:text-xl text-lg text-text-alter'
              scrambleSpeed={150}
              delay={2000}
            />
            <ScrambleText
              text='creates with care'
              className='md:text-xl text-lg text-text-alter'
              scrambleSpeed={160}
              delay={3000}
            />
          </div>
        </div>
      </section>
      <div className='w-full h-[1px] border-stone-800 border-b to-transparent' />
    </>
  )
}

export default HeroSection
