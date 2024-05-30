import React from 'react'
import '../mobileapp/mobileapp.css'

import Appstore from '../../assets/app_store.png'
import Playstore from '../../assets/play_store.png'


const mobileapp = () => {
  return (
    <div className='mobile-app' id='mobile-app'>
      <div className="moble-conent">
        <div className="text">
            <h2>For Better Experince Download</h2>
            <h1>My-store. App</h1>
        </div>
        <div className="images">
            <img src={Appstore} alt="" />
            <img src={Playstore} alt="" />
        </div>
      </div>
    </div>
  )
}

export default mobileapp
