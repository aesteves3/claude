import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

// Signal to vite-plugin-prerender that the app has finished rendering
document.dispatchEvent(new Event('render-event'))
