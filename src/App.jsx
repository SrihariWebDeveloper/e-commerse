import React from 'react'

import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from'../src/pages/homepage/home.jsx'
import Footer from './components/footer/footer.jsx'
import { useState } from 'react'
import Login from './components/loginsignup/login.jsx'

const App = () => {
  const [signup,setsignup] = useState(false)

  return (
    <>
     {signup?<Login setsignup={setsignup}/>:<></>}
    <div className='app'>
      <Navbar setsignup={setsignup}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
