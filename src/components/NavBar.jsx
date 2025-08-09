import React from "react";
import logo from "../assets/logo.png"
import styled from "styled-components";

const Navbar = () => {
    return (
        <NavbarCont>
            <a href="/">
                <img src={logo} alt="Logo DaylyFast" className="navbar-logo" />
                <p>DaylyFast</p>
            </a>
        </NavbarCont>
    );
}

const NavbarCont = styled.nav`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    background-color: #1a1a1a;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        
        img {
            height: 40px;
            margin-right: 10px;
        }
        
        p {
            margin: 0;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
`

export default Navbar;