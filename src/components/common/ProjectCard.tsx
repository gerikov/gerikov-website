type Props = {
  image: string
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
}

const ProjectCard = ({ image, title, description, tags, link, github }: Props) => {
  return (
    <div className='project z-10 p-10 w-full bg-[#0a0a0a] border-1 border-primary/20 rounded-md'>
      <div className='flex gap-10 flex-col md:flex-row'>
        <div className='flex-1'>
          <img src={image} alt={title} className='w-full max-w-[500px]' />
        </div>
        <div className='flex-1  py-2 flex flex-col justify-between'>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
            <div className='flex gap-2'>
              {link && (
                <a href={link} target='_blank' rel='noopener noreferrer' className='text-primary'>
                  <span className='material-symbols-outlined hover:text-primary/70 transition-all duration-300 '>
                    link
                  </span>
                </a>
              )}
              {github && (
                <a href={github} target='_blank' rel='noopener noreferrer' className='text-primary'>
                  <span className='material-symbols-outlined hover:text-primary/70 transition-all duration-300 '>
                    code
                  </span>
                </a>
              )}
            </div>
          </div>
          <p className='text-stone-400 mb-2'>{description}</p>
          <div className='project-tags text-white/50 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span className='tag bg-primary/10 text-primary px-2 py-1 rounded-md text-sm' key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
