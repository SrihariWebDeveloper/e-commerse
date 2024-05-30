import React from 'react'
import '../footer/footer.css'

import Facebook from '../../assets/facebook_icon.png'
import Linkedin from '../../assets/linkedin_icon.png'
import Twitter from '../../assets/twitter_icon.png'


const footer = () => {
  return (
    <div className='footer' id='contact-us'>
      <div className="footer-content">
        <div className="footer-left">
            <h2>My-Store.</h2>
            <ul>
                <li>20-23/1 Gangapuri,manthani</li>
                <li>Peddaplli</li>
                <li>runnersunny07@gmail.com</li>
                <li>+19 99081 80521</li>
            </ul>
        </div>
        <div className="footer-middle">
            <h2>Menu</h2>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Mobile app</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>Social media Links.</h2>
            <ul>
                <li><img src={Facebook} alt="" /></li>
                <li><img src={Linkedin} alt="" /></li>
                <li><img src={Twitter} alt="" /></li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <h4>2024 Srihari.Dev All rights Reseverd</h4>
        <p>Terms of use Privacy policy</p>
      </div>
    </div>
  )
}

export default footer
