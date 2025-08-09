import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import App from './App.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import AdvertisingPage from './pages/AdvertisingPage.jsx'
import PartnersPage from './pages/PartnersPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import CollaboratorsPage from './pages/CollaboratorsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path='/advertising' element={<AdvertisingPage />} />
          <Route path='/partners' element={<PartnersPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/collaborators' element={<CollaboratorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
