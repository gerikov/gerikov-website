import ProjectSection from './ProjectSection'
import FlowSection from './FlowSection'
import SkillsSection from './SkillsSection'
import WorkExperienceSection from './WorkExperienceSection'
import HeroSection from './HeroSection'

const MainContent: React.FC = () => {
  return (
    <main className='mx-auto'>
      {/* Hero Section */}
      <HeroSection />

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
