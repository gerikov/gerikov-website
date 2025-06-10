type Props = {
  children: React.ReactNode
}

const Label = ({ children }: Props) => {
  return (
    <div className='bg-primary/15 relative flex items-center justify-center w-fit px-10 py-2 min-w-40'>
      <div className='absolute top-0 left-0 border-l border-t border-primary w-2 h-2' />
      <div className='flex items-center gap-2'>
        <span className='material-symbols-outlined text-primary' style={{ fontSize: '14px' }}>
          keyboard_double_arrow_left
        </span>
        <span className='text-primary uppercase tracking-widest'>{children}</span>
        <span className='material-symbols-outlined text-primary' style={{ fontSize: '14px' }}>
          keyboard_double_arrow_right
        </span>
      </div>
      <div className='absolute bottom-0 right-0 border-r border-b border-primary w-2 h-2' />
    </div>
  )
}

export default Label
