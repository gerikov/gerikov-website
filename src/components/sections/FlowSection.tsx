import { maxWidth } from '../../config'
import { cn } from '../../lib/utils'
import Label from '../common/Label'

const FlowSection = () => {
  return (
    <section className='flex flex-col gap-10 py-10 relative border-from-stone-800 border-to-transparent border-b border-t'>
      <div
        className={cn(
          'absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex justify-center items-center',
          maxWidth
        )}
      ></div>
      <div className='flex justify-center'>
        <Label>Process</Label>
      </div>
      <div className={cn('flex flex-wrap justify-center mx-auto', maxWidth)}>
        <FlowItem
          title='Research & Understand'
          description='I start by getting to know you, your goals, and your audience. This helps me uncover what your website really needs and how it can stand out in your industry.'
          icon='search_insights'
          number='01'
        />
        <FlowItem
          title='Design & Plan'
          description='With the insights from research, I create wireframes and visual concepts that reflect your brand and focus on a smooth, user-friendly experience.'
          icon='design_services'
          number='02'
        />
        <FlowItem
          title='Build & Develop'
          description='Once the design is approved, I bring everything to life using clean, responsive code—making sure your site looks great and works flawlessly on all devices.'
          icon='code'
          number='03'
        />
        <FlowItem
          title='Test & Improve'
          description='After launch, I don’t just walk away. I test, gather feedback, and refine the site to make sure it keeps performing and growing with your business.'
          icon='loop'
          number='04'
        />
      </div>
    </section>
  )
}

const FlowItem = ({
  title,
  description,
  icon,
  number,
}: {
  title: string
  description: string
  icon: string
  number: string
}) => {
  return (
    <div className='group flex flex-col  border-1 border-stone-900 p-4 hover:bg-primary transition-all duration-300 max-w-[320px]'>
      <div className='text-sm font-bold text-text-alter group-hover:text-white transition-all duration-300 flex items-center mb-4'>
        {number}
      </div>
      <div className=' flex text-2xl font-bold text-primary group-hover:text-white transition-all duration-300 items-center gap-1 mb-2'>
        <span className='material-symbols-outlined text-primary group-hover:text-white transition-all duration-300 '>
          {icon}
        </span>
        <span className='group-hover:text-white transition-all duration-300'>{title}</span>
      </div>
      <div className='text-text-alter font-light group-hover:text-black transition-all duration-300'>{description}</div>
    </div>
  )
}

export default FlowSection
