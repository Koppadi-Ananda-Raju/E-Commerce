import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclsive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='Your Email id' /> 
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default NewsLetter