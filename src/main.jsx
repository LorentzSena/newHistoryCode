import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles.js'
import Layout from './components/Layout.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import AdvertisingPage from './pages/AdvertisingPage.jsx'
import PartnersPage from './pages/PartnersPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import CollaboratorsPage from './pages/CollaboratorsPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
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
  </React.StrictMode>,
)
