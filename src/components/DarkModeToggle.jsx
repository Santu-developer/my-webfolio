import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme.jsx'

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      aria-label="Toggle dark mode"
      className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center"
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  )
}
