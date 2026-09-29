import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import 'leaflet/dist/leaflet.css'
import './styles/tokens.css'
import './styles/app.css'
import App from './App'

const container = document.getElementById('root')!

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
