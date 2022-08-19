import { useState } from 'react'
import './Button.css'

const Button = (props) => {
const classes = props.type;

  return (
    <>
        <button className={classes}>{props.text}</button>
    </>
  )
}

export default Button