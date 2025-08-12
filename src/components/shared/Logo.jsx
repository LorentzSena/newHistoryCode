import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Logo = ({ text, href = "/", size = "medium" }) => {
    return (
        <LogoLink href={href}>
            <LogoImage size={size} src={logo} alt="Logo DaylyFast" />
            <LogoText size={size}>{text}</LogoText>
        </LogoLink>
    );
};

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
`;

const LogoImage = styled.img`
    height: ${props => {
        switch (props.size) {
            case "small": return "35px";
            case "large": return "55px";
            default: return "45px";
        }
    }};
    margin-right: 8px;
`;

const LogoText = styled.p`
    margin: 0;
    font-weight: ${props => props.size === "small" ? "400" : "600"};
    font-size: ${props => {
        switch (props.size) {
            case "small": return "1rem";
            case "large": return "1.5rem";
            default: return "1.3rem";
        }
    }};
    letter-spacing: 1px;
`;

export default Logo;
