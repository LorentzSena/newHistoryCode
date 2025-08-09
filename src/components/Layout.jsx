import { Outlet } from "react-router-dom"
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}