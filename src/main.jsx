import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VehicleProvider } from './context/VehicleContext'
import { AppProvider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <VehicleProvider>
        <App />
      </VehicleProvider>
    </AppProvider>
  </React.StrictMode>,
)