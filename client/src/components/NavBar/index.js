import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Google Books Search</Link>
                <ul className="navbar-nav">
                    <ol className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Click to Search Books</Link>
                    </ol>
                    <ol className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >View Saved Books</Link>
                    </ol>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;