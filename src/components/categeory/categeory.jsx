import React from 'react'
import '../categeory/categeory.css'
import ProcductOne from '../../assets/p-1.jpg'
import ProcductTwo from '../../assets/p-2.jpg'
import ProcductThree from '../../assets/p-3.jpg'
import ProcductFour from '../../assets/p-4.jpg'
import ProcductFive from '../../assets/p-5.jpg'
import ProcductSix from '../../assets/p-6.jpg'
import ProcductSeven from '../../assets/p-7.jpg'
import ProcductEight from '../../assets/p-8.jpg'
import Product from '../products/product.jsx'


const categeory = () => {
  return (
    <div className='Categeory' id='categeory'>
      <div className="explore">
        <h2>Explore Our Categeory</h2>
        <p>Chose your best product and explore our app in a safe manner.</p>
        <div className="image-cate">
            <div className="categ">
                <img src={ProcductOne} alt="" />
                <h5>Whatch</h5>
            </div>
            <div className="categ">
                <img src={ProcductTwo} alt="" />
                <h5>HeadSet</h5>
            </div>
            <div className="categ">
                <img src={ProcductThree} alt="" />
                <h5>Dumbles</h5>
            </div>
            <div className="categ">
                <img src={ProcductFour} alt="" />
                <h5>EyeGlasses</h5>
            </div>
            <div className="categ">
                <img src={ProcductFive} alt="" />
                <h5>Helmate</h5>
            </div>
            <div className="categ">
                <img src={ProcductSix} alt="" />
                <h5>WaterBottel</h5>
            </div>
            <div className="categ">
                <img src={ProcductSeven} alt="" />
                <h5>Dress</h5>
            </div>
            <div className="categ">
                <img src={ProcductEight} alt="" />
                <h5>Taps</h5>
            </div>
        </div>

      </div>
      <Product/>
    </div>
  )
}

export default categeory
