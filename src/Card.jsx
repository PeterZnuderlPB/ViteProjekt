import { useState } from 'react'
import './Card.css'

function Card() {
  const [followers, setFollowers] = useState(1234)
  const [firstName, setFirstName] = useState("Jane")

  const handleNameChange = event => {
    setFirstName(event.target.value);
  };

  return (
    <div className="card">
      <div className="card-background-img">
        <img src="https://images.unsplash.com/photo-1574230737626-341cb22a191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2ODc1NjE5&ixlib=rb-1.2.1&q=80&w=1080" className='card-background-img' alt='background'/>
      </div>
      <img src="/vite.svg" className="card-profile-img" alt="Profile image" />
      <div className='card-info-area'>
        <h1 className='profile-name'>{firstName} Doe</h1>
        <p className='profile-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis massa vitae arcu vehicula iaculis. Nulla a massa nec dolor tincidunt porttitor eget ut leo.</p>

      </div>
      <div className='card-follow-info'>
        <div className='follow-info'>
          <p className='card-bold-text'>{followers}</p>
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
        <button className='success-button card-bottom-button' onClick={()=>setFollowers((followers)=>followers + 1)}>Follow</button>
      </div>
      <input onChange={handleNameChange} placeholder='First Name'/>
    </div>
  )
}

export default Card
