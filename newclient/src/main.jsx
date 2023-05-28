import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider  router={router} /> */}
    <App />
  </React.StrictMode>,
)
