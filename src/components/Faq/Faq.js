import React from 'react'
import { Link } from "react-router-dom";
import './Faq.css'
import FaqItems from './FaqItems';

function Faq() {

  return (
    <div>
        <div className="faq-section">
            <div className="container">
                <div className="faq-content">
                    <div className="faq-header">
                        <h5>FAQ</h5>
                        <h3 className="faq-headline">Frequently Asked Questions</h3>
                        <p className="faq-subtext">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                        <Link className='contact-link'>
                            <span className='text' >Contact Me</span>
                        </Link>
                    </div>

                    <div className="faqs">
                     <FaqItems />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
