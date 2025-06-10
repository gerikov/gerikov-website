import Label from '../common/Label'
import experience from '../../assets/exprience.json'
import WorkExperienceItem from '../common/WorkExperienceItem'

const WorkExperienceSection = () => {
  return (
    <section className='py-20'>
      <div className='flex justify-center mb-10'>
        <Label>Work Experience</Label>
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
