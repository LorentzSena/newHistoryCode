import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function App() {
  const navigate = useNavigate()

  return (
    <Container>
      <h1>O que você quer resolver hoje?</h1> {/* implementar mais tarde um botão de "Relaxar" aí algo engraçado acontece */}
      <CardContainer>
        <ButtonAction onClick={() => navigate('/payment')}>
          Pagamentos
        </ButtonAction>
        <ButtonAction onClick={() => navigate('/advertising')}>
          Publicações
        </ButtonAction>
        <ButtonAction onClick={() => navigate('/partners')}>
          Gerenciar Parcerias
        </ButtonAction>
        <ButtonAction onClick={() => navigate('/events')}>
          Acompanhar Eventos
        </ButtonAction>
        <ButtonAction onClick={() => navigate('/collaborators')}>
          Gerenciar Colaboradores
        </ButtonAction>
      </CardContainer>
      <ReadTheDocs>
        Selecione uma opção e bora conquistar!
      </ReadTheDocs>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const CardContainer = styled.div`
  padding: 2em;
  margin-top: 1em;
  display: flex;
  gap: 5px;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;

const ButtonAction = styled.button`
  background-color: #C9A227;
`

export default App
