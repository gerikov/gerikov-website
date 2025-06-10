import Label from '../common/Label'

const FlowSection = () => {
  return (
    <section className='flex flex-col gap-10'>
      <div className='flex justify-center'>
        <Label>Process</Label>
      </div>
      <div className='flex flex-wrap justify-center'>
        <FlowItem
          title='Research'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          icon='search_insights'
          number='01'
        />
        <FlowItem
          title='Design'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          icon='design_services'
          number='02'
        />
        <FlowItem
          title='Develop'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
          icon='code'
          number='03'
        />
        <FlowItem
          title='Iterate'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
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
    <div className='group flex flex-col  border-1 border-stone-900 p-4 hover:bg-primary transition-all duration-300 max-w-[400px]'>
      <div className='text-sm font-bold text-text-alter group-hover:text-white transition-all duration-300 flex items-center mb-4'>
        {number}
      </div>
      <div className=' flex text-2xl font-bold text-primary group-hover:text-white transition-all duration-300 items-center gap-1'>
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
