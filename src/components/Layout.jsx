import { Outlet } from "react-router-dom"
import Navbar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout() {
    return (
        <LayoutContainer>
            <Navbar />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </LayoutContainer>
    );
}

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 2rem;
`;