import { menuItems } from '@/config'
import { Button } from '../ui/button'
import { XIcon } from 'lucide-react'

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking on the backdrop, not on the menu content
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div className='fixed inset-0 z-40 bg-black/04 backdrop-blur-xs' onClick={handleBackdropClick} />
      {/* Menu content */}
      <div className='absolute top-0 right-0 w-1/2 h-full bg-black  z-50 flex flex-col gap-4 py-4 px-2'>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-end'>
            <Button variant='ghost' size='icon' className='text-white/70 hover:text-primary' onClick={onClose}>
              <XIcon className='text-white/70 hover:text-primary' style={{ width: '20px', height: '20px' }} />
            </Button>
          </div>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-text-alter hover:text-primary px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex justify-end'
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileMenu
