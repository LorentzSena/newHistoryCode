import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <h1>O que você quer fazer hoje?</h1> {/* implementar mais tarde um botão de "Relaxar" aí algo engraçado acontece */}
      <div className="card">
        <button onClick={() => navigate('/payment')}>
          Pagamentos
        </button>
        <button onClick={() => navigate('/advertising')}>
          Organizar postagens
        </button>
        <button onClick={() => navigate('/partners')}>
          Gerenciar Parcerias
        </button>
        <button onClick={() => navigate('/events')}>
          Acompanhar Eventos
        </button>
        <button onClick={() => navigate('/collaborators')}>
          Gerir Colaboradores
        </button>
      </div>
      <p className="read-the-docs">
        Selecione uma opção e bora conquistar!</p>
    </>
  )
}

export default App
