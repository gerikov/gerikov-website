import { Suspense, lazy } from 'react'
import Header from './components/layout/Header'
import Loading from './components/common/Loading'
import TVNoise from './components/common/TVNoise'
import './App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Footer from './components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

gsap.registerPlugin(useGSAP)
// Lazy load the main content
const MainContent = lazy(() => import('./components/sections/MainContent'))

function App() {
  return (
    <div className='min-h-screen bg-background font-inter'>
      <TVNoise />
      <Header />
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
      <Analytics />
      <Footer />
    </div>
  )
}

export default App
