import React from "react";
import Logo from "./shared/Logo";
import styled from "styled-components";

const Navbar = () => {
    return (
        <HeaderContainer>
            <Logo text="DaylyFast" />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
display: flex;
justify-content: ${props => props.justify || "space-between"};
align-items: center;
padding: 0.8rem 2rem;
background-color: #0a0a0a;
box-shadow: 0 2px 8px rgba(0,0,0,0.3);
`

export default Navbar;