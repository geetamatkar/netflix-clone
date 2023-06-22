import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const[show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            } 
            else handleShow(false)
        })
        return() => {
            window.removeEventListener("scroll", null)
        }
    },[])


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
          className='nav_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='Netflix Logo'
        
        />


        <img
          className='nav_avatar'
          src='https://cdn1.vectorstock.com/i/1000x1000/04/10/cute-penguin-icon-vector-10700410.jpg'
          alt='Netflix Logo'
        
        />

    </div>
  )
}

export default Navbar