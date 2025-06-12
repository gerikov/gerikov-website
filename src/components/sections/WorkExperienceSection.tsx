import DisplayLabel from '../common/DisplayLabel'
import experience from '../../assets/experience.json'
import WorkExperienceItem from '../common/WorkExperienceItem'
import { maxWidth } from '../../config'
import { cn } from '../../lib/utils'

const WorkExperienceSection = () => {
  return (
    <section className={cn('py-10 mx-auto px-4 md:px-6 lg:px-8', maxWidth)}>
      <div className='flex justify-center mb-10'>
        <DisplayLabel>Work Experience</DisplayLabel>
      </div>
      <div className='border-1 border-stone-900'>
        {experience.experience.reverse().map((item, index) => (
          <WorkExperienceItem
            key={index}
            date={item.date}
            title={item.title}
            company={item.company}
            description={item.description}
            active={index === experience.experience.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkExperienceSection
