import React from 'react'

function PorfolioItem(props) {
  return (
    <>
      <div className="display-item">
        <img src={props.img} alt="" />
        <div className="display-tag">
            <p className="tag">
                {props.tag}
            </p>
            <h3 className='tag-text'>{props.text}</h3>
        </div>
      </div>
    </>
  )
}

export default PorfolioItem
