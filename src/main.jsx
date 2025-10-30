// App entry: mounts React, sets up Router and Theme provider
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// Using Bootstrap via CDN in index.html, no local CSS import
import { ThemeProvider } from './hooks/useTheme.jsx'
// Minimal custom CSS for section glass backgrounds
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
