import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import SpaceTicketForm from './components/SpaceTicketForm/SpaceTicketForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpaceTicketForm />
    
  </StrictMode>,
)

