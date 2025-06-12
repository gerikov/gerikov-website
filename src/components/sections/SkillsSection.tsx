import DisplayLabel from '../common/DisplayLabel'

import wave from '../../assets/patterns/wave.svg'
import experience from '../../assets/experience.json'
import { maxWidth } from '../../config'
import { cn } from '../../lib/utils'

const SkillsSection = () => {
  return (
    <section className={cn('py-10 mx-auto px-4 md:px-6 lg:px-8', maxWidth)} id='skills'>
      <div className='flex justify-center mb-10'>
        <DisplayLabel>Skills</DisplayLabel>
      </div>
      <div className=' bg-primary p-6 font-medium rounded-xl flex items-center gap-4 max-w-5xl mx-auto relative'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: `url(${wave})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, transparent, #00000022)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #00000022)',
          }}
        />
        <span className='material-symbols-outlined text-white px-2' style={{ fontSize: '32px' }}>
          charger
        </span>
        <div>
          Design and technology fuel my curiosity every day. I'm always learning—whether it's the latest frontend
          frameworks or fresh design trends—because growth isn't optional; it's essential. For me, great work starts
          with relentless improvement.
        </div>
      </div>
      <h3 className='text-2xl text-text-alter font-bold mt-10 mb-4'>Languages and Frameworks</h3>
      <div className='flex flex-wrap gap-4 justify-evenly'>
        {/* TODO: add icons for frameworks */}
        {experience.frameworks.map((framework) => (
          <SkillItem key={framework.name} name={framework.name} icon={framework.icon} />
        ))}
      </div>
      <h3 className='text-2xl text-text-alter font-bold mt-10 mb-4'>Technologies</h3>
      <div className='flex flex-wrap gap-2 mb-4 max-w-3xl'>
        {experience.technologies.map((technology) => (
          <div key={technology} className='flex items-center gap-2'>
            <span className='text-sm  bg-primary/20 px-3 py-1 rounded-lg border border-primary/20 text-text-alter'>
              {technology}
            </span>
          </div>
        ))}
      </div>
      <h3 className='text-2xl text-text-alter font-bold mt-10 mb-4'>Languages</h3>
      <ul className='text-text-alter'>
        {experience.languages.map((language) => (
          <li className='flex items-center gap-2 mb-1'>
            <span className='material-symbols-outlined' style={{ fontSize: '20px' }}>
              language
            </span>
            {language.name} ({language.level})
          </li>
        ))}
      </ul>
    </section>
  )
}

const SkillItem = ({ name, icon = 'language' }: { name: string; icon: string }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 mb-1 bg-gradient-to-br from-primary/0 to-primary/15 p-2 rounded-lg text-text-alter border border-primary/20 md:w-32 md:h-24 w-26 h-20'>
      <span className='material-symbols-outlined' style={{ fontSize: '20px' }}>
        {icon}
      </span>
      <span className='uppercase text-sm font-medium'>{name}</span>
    </div>
  )
}

export default SkillsSection
