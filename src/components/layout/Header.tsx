import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-black shadow-sm  border-b border-white/20'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex justify-center  flex-col'>
            <div className='text-xl font-bold text-white uppercase '>Gergo Kovacs</div>
            <div className='text-sm text-primary uppercase'>Frontend Developer</div>
          </div>
          <div className='flex items-center space-x-4 border-l '>
            <a href='#about' className='text-white/70 hover:text-primary  px-3 py-2 rounded-md text-sm font-medium'>
              About
            </a>
            <a href='#projects' className='text-white/70 hover:text-primary  px-3 py-2 rounded-md text-sm font-medium'>
              Projects
            </a>
            <a href='#contact' className='text-white/70 hover:text-primary  px-3 py-2 rounded-md text-sm font-medium'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
