import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App2 />
  </StrictMode>,
)
