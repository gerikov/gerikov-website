import React from 'react'

const MainContent: React.FC = () => {
  return (
    <main className='mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <section className='max-w-[1300px] w-full mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center border-r border-b border-l border-stone-800'>
        <h1 className='text-4xl font-bold text-white mb-4'>A frontend developer who</h1>
        <p className='text-xl text-white/50'>designs with purpose</p>
        <p className='text-xl text-white/50'>codes with precision</p>
        <p className='text-xl text-white/50'>creates with care</p>
      </section>

      {/* About Section */}
      <section id='about' className='py-20'>
        <h2 className='text-3xl font-bold text-stone-900 mb-8'>About Me</h2>
        {/* Add your about content here */}
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20'>
        <h2 className='text-3xl font-bold text-stone-900 mb-8'>Projects</h2>
        {/* Add your projects content here */}
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <h2 className='text-3xl font-bold text-stone-900 mb-8'>Contact</h2>
        {/* Add your contact content here */}
      </section>
    </main>
  )
}

export default MainContent
