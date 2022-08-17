import { useState } from 'react'
import './Cards.css'
import Card from './Card'

const Cards = (props) => {
  var cards=[];

  for (var i=0; i<props.count; i++) {
    cards.push(<Card/>)
  }

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default Cards
