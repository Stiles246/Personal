import React from 'react'
import { blogData } from '../Data'

function BlogItem() {
  return (
    <>
        {blogData.map((item) => {
            return (
                <div className="blog" key={item.id}>
                    <img src={item.img} alt="" className='blog-img'/>
                    <div className="blog-text">
                        <p className='article-topline'>{item.categories}</p>
                        <h4 className='article-headline'>{item.text}</h4>
                        <span className="date">{item.date}</span>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default BlogItem
