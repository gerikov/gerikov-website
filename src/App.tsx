import React, { Suspense, lazy } from 'react'
import Header from './components/layout/Header'
import Loading from './components/common/Loading'
import './App.css'

// Lazy load the main content
const MainContent = lazy(() => import('./components/sections/MainContent'))

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
    </div>
  )
}

export default App
