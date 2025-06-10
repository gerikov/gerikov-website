import { useState } from 'react'
import { cn } from '../../lib/utils'

type Props = {
  date: string
  title: string
  company: string
  description: string[]
  active?: boolean
}

const WorkExperienceItem = ({ date, title, company, active, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-b border-stone-900 hover:bg-primary/10 transition-colors duration-300'>
      <div
        className={cn(
          'grid grid-cols-[60px_100px_auto_50px] md:grid-cols-4 md:gap-4 gap-4 p-2 overflow-hidden',
          active ? 'text-primary font-bold' : 'text-text-alter'
        )}
      >
        <div className=''>{date}</div>
        <div className='w-40 text-wrap'>{company}</div>
        <div>{title}</div>
        <button onClick={() => setIsOpen(!isOpen)} className='ml-auto'>
          <span
            className={cn(
              'material-symbols-outlined transition-transform duration-300 cursor-pointer',
              isOpen && 'rotate-180'
            )}
          >
            keyboard_arrow_down
          </span>
        </button>
      </div>
      {isOpen && (
        <ul className='p-4 text-text-alter'>
          {description.map((item, index) => (
            <li key={index} className='list-disc list-inside'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default WorkExperienceItem
