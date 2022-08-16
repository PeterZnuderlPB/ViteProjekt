import { useState } from 'react'
import './Card.css'

function Card() {
  //const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className="card-background-img">

      </div>
      <div className='card-profile-img'>

      </div>
      <div className='card-info-area'>
        <h1 className='profile-name'>Jane Doe</h1>
        <p className='profile-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis massa vitae arcu vehicula iaculis. Nulla a massa nec dolor tincidunt porttitor eget ut leo.</p>
      </div>
      <div className='card-follow-info'>
        <div className='follow-info'>
          <p className='card-bold-text'>1234</p>
          <p className='card-simple-text'>Followers</p>
        </div>
        <div className='follow-info'>
          <div className='follow-info-content'>
            <p className='card-bold-text'>5678</p>
            <p className='card-simple-text'>Following</p>
          </div>
        </div>
      </div>
      <div className='card-bottom-button'>
        <button className='success-button'>Follow</button>
      </div>
    </div>
  )
}

export default Card
