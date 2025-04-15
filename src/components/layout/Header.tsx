import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-white shadow-sm'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <a href='/' className='text-xl font-bold text-gray-900'>
              Your Name
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <a href='#about' className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
              About
            </a>
            <a href='#projects' className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
              Projects
            </a>
            <a href='#contact' className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
