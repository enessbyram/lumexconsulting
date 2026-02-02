import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // Bunu ekle

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='lumexconsulting'> {/* Bunu ekle */}
      <App />
    </BrowserRouter> {/* Bunu ekle */}
  </React.StrictMode>,
)