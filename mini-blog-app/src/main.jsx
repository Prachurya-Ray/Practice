import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
