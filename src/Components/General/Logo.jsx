import { useState } from 'react'
import './Logo.css'

const Logo = (props) => {
    
  return (
    <>
        <picture className="logo">
            <img  className="logo" src={props.source} alt="Logo">{props.text}</img>
        </picture>
    </>
  )
}

export default Logo