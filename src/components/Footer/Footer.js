import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="container">
            <div className="footer-content">
                <div className='footer-top'>
                    <h4 className="logo">
                        Personal
                    </h4>
                    <div className="menu">
                        <h5 className='menu-header'>MENU</h5>
                        <div className="footer-links">
                            <Link className='footer-link'>
                                <p className='text'>About</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>Services</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>Blog</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>Contact</p>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <h5 className='service-header'>SERVICE</h5>
                        <div className="footer-links">
                            <Link className='footer-link'>
                                <p className='text'>Design</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>Development</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>Marketing</p>
                            </Link>
                            <Link className='footer-link'>
                                <p className='text'>See More</p>
                            </Link>
                        </div>
                    </div>

                    <div className="socials">
                        <img src="./images/facebook.svg" alt="" />
                        <img src="./images/twitter.svg" alt="" />
                        <img src="./images/instagram.svg" alt="" />
                    </div>
                </div>

                <img src="./images/footer-line.svg" alt="" />

                <div className="copyright-terms">
                    <p className="text">Copyright © 2022 Laaqiq. All Rights Reserved.</p>
                    <div className="terms">
                        <p className="text">Terms of Use</p>
                        <p className="text">Privacy Policy</p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
