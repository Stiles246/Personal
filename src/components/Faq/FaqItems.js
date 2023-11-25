import React, {useState} from 'react'
import { faqData } from '../Data';

function FaqItems() {

    const [click, setClick] = useState(false)

    const toggle = index => {
        if (click  === index) {
            return setClick(null)
        }

        setClick(index)

    }

  return (

    <>
    {faqData.map((item, index) => {
        return (
            <>
                <div className='faq' onClick={() => toggle(index)} key={item.id}>
                    <div className={click === index ? 'faq-title active' : 'faq-title'} >
                        <h4 className='title'>{item.question}</h4>
                        <img src={click === index ? item.upIcon : item.downIcon} alt="" className='title-icon' />
                    </div>
                    {click === index ? (<div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>) : null }
                </div>
            </>
        )
    } )}
    </>
  )
}

export default FaqItems
