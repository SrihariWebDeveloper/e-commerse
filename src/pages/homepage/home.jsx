import React from 'react'
import '../homepage/home.css'
import Header from '../../components/header/header.jsx'
import Categeory from '../../components/categeory/categeory.jsx'
import MobileApp from '../../components/mobileapp/mobileapp.jsx'

const home = () => {
  return (
    <div>
      <Header/>
      <Categeory/>
      <MobileApp/>
    </div>
  )
}

export default home
