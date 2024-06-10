// src/components/Navbar.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("harsh");
        navigate("/login");
    };

    let location = useLocation();
    const isAuthenticated = !!localStorage.getItem("harsh");

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        {isAuthenticated && (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/bargraph1" ? "active" : ""}`} to="/bargraph1">Bar Graph 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/bargraph2" ? "active" : ""}`} to="/bargraph2">Bar Graph 2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/reviews" ? "active" : ""}`} to="/reviews">Reviews</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/sentiment" ? "active" : ""}`} to="/sentiment">Sentiment</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {!isAuthenticated ?
                        <form className='d-flex'>
                            <Link className="btn btn-primary mx-1" to="/login" role='submit'>Login</Link>
                            <Link className='btn btn-primary mx-1' to="/signup" role='submit'>Signup</Link>
                        </form>
                        :
                        <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
