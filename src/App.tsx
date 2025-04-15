import React from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero Section */}
        <section className='text-center py-20'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Frontend Developer</h1>
          <p className='text-xl text-gray-600'>Creating beautiful and functional web experiences</p>
        </section>

        {/* About Section */}
        <section id='about' className='py-20'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>About Me</h2>
          {/* Add your about content here */}
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-20'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Projects</h2>
          {/* Add your projects content here */}
        </section>

        {/* Contact Section */}
        <section id='contact' className='py-20'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Contact</h2>
          {/* Add your contact content here */}
        </section>
      </main>
    </div>
  )
}

export default App
