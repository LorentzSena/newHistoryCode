import React from "react";
import Logo from "./shared/Logo";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <Logo text="Faça seu dia mais eficiente!" size="small" />
        </FooterContainer>
    );
}

// Estilos específicos do Footer - você pode editar aqui!
const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 2rem;
    background-color: #0a0a0a; // Cor mais escura para o footer
    box-shadow: 0 -2px 8px rgba(0,0,0,0.3); // Sombra na parte superior
    border-top: 1px solid #333; // Borda superior
    
    // Responsividade específica do footer
    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
    }

`;

export default Footer;