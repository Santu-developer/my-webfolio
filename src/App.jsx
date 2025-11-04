// Root app: layout, routes, and global sections
import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Lazy load pages for better performance
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const CV = lazy(() => import('./pages/CV.jsx'))

// Loading component with better UX
function LoadingFallback() {
  return (
    <div className="container py-5">
      <div className="card p-5 text-center">
        <div className="spinner-border text-primary mx-auto mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted mb-0">Loading...</p>
      </div>
    </div>
  )
}

// Scroll to top on route change
function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}

export default function App() {
  useScrollToTop()
  return (
    <div>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
