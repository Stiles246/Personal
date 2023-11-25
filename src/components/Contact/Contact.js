import React from 'react'
import './Contact.css'

function Contact({ topline, headline, description, location, number, mail, address, phone, email, buttonLabel}) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
      <div className="contact-section">
        <div className="container">
            <div className="contact-content">
                <div className="contact-form">
                    <form action="" className='form' onSubmit={handleSubmit}>
                        <h4 className='form-header'>Get In Touch</h4>
                        <div className="form-input">
                            <input type="email" className="form-inputs" placeholder='Your Email'/>
                            <select name="" id="role" className='drop-down'>
                                <option value="design">Product Design</option>
                                <option value="development">Development</option>
                                <option value="Video">Video Editing</option>
                                <option value="Graphic">Graphic Design</option>
                                <option value="artist">Artist</option>
                            </select>
                            <textarea placeholder='Message' className='text-area'/>
                            <button className="btn submit-btn">{buttonLabel}</button>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="contact-header">
                        <h5 className='contact-topline'>{topline}</h5>
                        <h2 className='contact-headline'>{headline}</h2>
                        <p className='contact-subtext'>{description}</p>
                    </div>
                    <div className="contact-details">
                        <div className="detail">
                            <img src={location} alt="" className='detail-icon' />
                            <p className="text-big">{address}</p>
                        </div>
                        <div className="detail">
                            <img src={phone} alt="" className='detail-icon' />
                            <p className="text-big">{number}</p>
                        </div>
                        <div className="detail">
                            <img src={email} alt="" className='detail-icon' />
                            <p className="text-big">{mail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
