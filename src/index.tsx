import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'

let container = document.getElementById('app')!
let root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
