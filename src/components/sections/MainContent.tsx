import ProjectSection from './ProjectSection'
import FlowSection from './FlowSection'
import SkillsSection from './SkillsSection'
import WorkExperienceSection from './WorkExperienceSection'
import HeroSection from './HeroSection'
import GradientDivider from '../common/GradientDivider'
import ContactSection from './ContactSection'

const MainContent: React.FC = () => {
  return (
    <main className='mx-auto'>
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectSection />

      <GradientDivider className='my-10 max-w-[1000px] mx-auto' />

      {/* Flow Section */}
      <FlowSection />

      <GradientDivider className='my-10 max-w-[1000px] mx-auto' />

      {/* Skills Section */}
      <SkillsSection />

      {/* Work Experience Section */}
      <WorkExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      <div className='h-screen'></div>
      <div className='h-screen'></div>
    </main>
  )
}

export default MainContent
