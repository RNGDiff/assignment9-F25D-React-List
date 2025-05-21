import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/header">F25D</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
