import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <h1>GET OUR EXCLUSIVE OFFERS ON YOUR EMAIL ADDRESS</h1>
            <p>Subscribe to Our NewsLetter & stay for Updated</p>
            <div>
                <input type="email" placeholder='Enter your email address' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter