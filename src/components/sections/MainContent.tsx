import React from 'react'
import ScrambleText from '../common/ScrambleText'
import AnimatedFrame from '../common/AnimatedFrame'
import Label from '../common/Label'
import TestSection from './TestSection'
import ProjectSection from './ProjectSection'
import FlowSection from './FlowSection'
import SkillsSection from './SkillsSection'
import WorkExperienceSection from './WorkExperienceSection'

const MainContent: React.FC = () => {
  return (
    <main className='mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <section className='max-w-[1300px] w-full mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center border-r border-b border-l border-stone-800'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          <ScrambleText text='A frontend developer who' className='text-primary' scrambleSpeed={80} />
        </h1>
        <div className='flex flex-col items-center space-y-2'>
          <ScrambleText
            text='designs with purpose'
            className='text-xl text-white/50'
            scrambleSpeed={150}
            delay={1000}
          />
          <ScrambleText
            text='codes with precision'
            className='text-xl text-white/50'
            scrambleSpeed={150}
            delay={2000}
          />
          <ScrambleText text='creates with care' className='text-xl text-white/50' scrambleSpeed={160} delay={3000} />
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20'>
        <Label>test</Label>
        <h2 className='text-3xl font-bold text-stone-900 mb-8'>About Me</h2>
        {/* Add your about content here */}
        <AnimatedFrame>
          <div className='flex flex-col items-center space-y-2 h-36'>
            <p className='text-xl text-white/50'>
              I'm a frontend developer with a passion for creating beautiful and functional web experiences.
            </p>
          </div>
        </AnimatedFrame>
      </section>

      {/* Projects Section */}
      <ProjectSection />

      {/* Flow Section */}
      <FlowSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Work Experience Section */}
      <WorkExperienceSection />

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <h2 className='text-3xl font-bold text-stone-900 mb-8'>Contact</h2>
        {/* Add your contact content here */}
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
        <div className='h-screen'></div>
      </section>
    </main>
  )
}

export default MainContent
