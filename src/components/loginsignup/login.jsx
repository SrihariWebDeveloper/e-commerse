import React, { useState } from 'react'
import '../loginsignup/login.css'

const login = ({setsignup}) => {
    const [heads,sethead] = useState("SignUP")
  return (
    <div className='login-signup'>
        <form>
            <div className="loginpopup">
            <div className="head">
                <h2>{heads}</h2>
                <p onClick={()=>setsignup(false)}>X</p>
            </div>
            <div className="input-filds">
                {
                    heads=="Login"?<></>:<input type="text" name="" id="" placeholder='Your Name' required/>
                }
                <input type="text" name="" id="" placeholder='YourEmail' required/>
                <input type="Password" name="" id="" placeholder='Password' required/>
            </div>
            <div className="btn">
                <button type="submit">
                    {
                        heads=="Login"?"Login":"Create Account"
                    }
                </button>
                <div className="condition">
                    <input type="checkbox" name="" id="" required/>
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                <div className="condi">
                {
                    heads=="Login"?
                    <p>Create an New account? <span onClick={()=>sethead('SignUP')}><u>Click Here</u></span></p>
                    :<p>Already an account? <span onClick={()=>sethead('Login')}><u>Login</u></span></p>
                }
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default login
