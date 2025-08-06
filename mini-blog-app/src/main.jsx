import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import Body from './components/Body.jsx'
import Header from './components/Header.jsx'

const AppLayout =()=>{
  return <>
   <Header />
    <Body /></>
}



createRoot(document.getElementById('root')).render(<AppLayout/>)
