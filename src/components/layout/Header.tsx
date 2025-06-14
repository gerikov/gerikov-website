import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { MenuIcon } from 'lucide-react'
import { menuItems } from '@/config'
import MobileMenu from '../common/MobileMenu'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className='bg-black shadow-sm border-b border-white/20 '>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex justify-center  flex-col'>
            <div className='text-xl font-bold text-white uppercase '>Gergo Kovacs</div>
            <div className='text-sm text-primary uppercase'>Frontend Developer</div>
          </div>
          <div className=' items-center space-x-4 hidden md:flex'>
            {menuItems.map((item) => (
              <a
                href={item.href}
                className='text-white/70 hover:text-primary  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300'
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className='flex items-center space-x-4 md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-white/70 hover:text-primary'
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon className='text-white/70 hover:text-primary' style={{ width: '20px', height: '20px' }} />
            </Button>
          </div>
          {isMobileMenuOpen && <MobileMenu onClose={handleMobileMenuOpen} />}
        </div>
      </nav>
    </header>
  )
}

export default Header
