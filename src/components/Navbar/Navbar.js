import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import Hamburger from "hamburger-react";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                  <NavLink to="/" className="nav-logo">
                    <img src="./images/logo.svg" alt="" />
                  </NavLink>
                    
                    <div className={`nav-links ${click ? 'show-nav' : 'hide-nav'}`}>
                        <ul className="nav-menu">
                            <li className="nav-item">
                            <NavLink
                                to="/"
                                className="active nav-link"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                to=""
                                className="active nav-link"
                                onClick={handleClick}
                            >
                                Services
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                to=""
                                className="active nav-link"
                                onClick={handleClick}
                            >
                                Pricing
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                to=""
                                className="active nav-link"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                            </li>
                        </ul>
                        <NavLink>
                            <button className='btn btn-outline nav-btn'
                            onClick={handleClick}
                            >CONTACT</button>
                        </NavLink>
                    </div>
                    <div className="nav-icon">
                      <Hamburger color="white" toggled={click} toggle={setClick} />
                    </div> 
              </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar
