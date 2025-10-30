// Root app: layout, routes, and global sections
import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
const CV = lazy(() => import('./pages/CV.jsx'))

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
      <Suspense
        fallback={
          <div className="container py-5">
            <div className="card p-4">Loading…</div>
          </div>
        }
      >
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
