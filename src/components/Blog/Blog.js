import React from 'react'
import './Blog.css'
import BlogItem from './BlogItem'

function Blog() {
  return (
    <>
      <div className="blog-section">
        <div className="container">
            <div className="blog-content">
                <div className="blog-header">
                  <div className='blog-text'>
                    <h5 className='blog-topline'>Our Blog</h5>
                    <h3 className='blog-headline'>Latest Blog Article</h3>
                  </div>
                    <button className='btn btn-secondary'>DISCOVER ALL</button>
                </div>
                <div className="blogs">
                  <BlogItem />
                </div>

                <img src="./images/newsline.svg" alt="" className='newsline'/>

                <div className="newsletter">
                  <div className="newsletter-text">
                    <h4 className="news-headline">
                      Newsletter
                    </h4>
                    <p className="newsletter-subtext">
                      A digital agency is a business you hire to outsource
                    </p>
                  </div>

                  <div className='input-submit'>
                    <input type="email" placeholder='Email' />
                    <button className='btn btn-secondary input-btn'>SUBSCRIBE</button>
                  </div>
                  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog
