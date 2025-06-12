import { version } from '../../../package.json'

const Footer = () => {
  return (
    <footer className='border-t border-white/20 py-4 px-4 md:px-6 lg:px-8 text-sm'>
      <div className='flex justify-center text-stone-500'>
        <p>© 2025 Gergo Kovacs. All rights reserved. v{version}</p>
      </div>
    </footer>
  )
}

export default Footer
