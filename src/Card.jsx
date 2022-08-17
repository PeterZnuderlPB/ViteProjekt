import { useState } from 'react'
import './Card.css'
import axios from 'axios'

function Card() {
  const [user, setUser] = useState({firstName:"jane", lastName:"Doe", location:"SI", email:"jane.doe@mail.com", description:"Description", followers:3, following:5, profile:"https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0"})

  const setNewUser = data => {
    console.log(data);
    let userdata = data.results[0];
    console.log(userdata);
    let newUser = {
      firstName: userdata.name.first,
      lastName: userdata.name.last,
      location: userdata.location.country,
      email: userdata.email,
      profile: userdata.picture.large,
      description: userdata.gender,
      followers: Math.floor(Math.random() * (100000 - 0 + 1)) + 0,
      following: Math.floor(Math.random() * (100000 - 0 + 1)) + 0
    };
    console.log(newUser);
    setUser(newUser);
  }

  const handleGetUser = () =>{
    console.log("Fetching user");
    axios.get("https://randomuser.me/api/")
    .then(response => setNewUser(response.data))
    .catch(err => console.log(err));
  }

  return (
    <div className="card">
      <div className="card-background-img">
        <img src="https://images.unsplash.com/photo-1574230737626-341cb22a191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2ODc1NjE5&ixlib=rb-1.2.1&q=80&w=1080" className='card-background-img' alt='background'/>
      </div>
      <img src={`${user.profile}`} className="card-profile-img" alt="Profile image"></img>
      <div className='card-info-area'>
        <h1 className='profile-name'>{user.firstName} {user.lastName}</h1>
        <p className='profile-description'>{user.description}</p>
        <p className='profile-description'>{user.location}</p>
        <p className='profile-description'>{user.email}</p>
      </div>
      <div className='card-follow-info'>
        <div className='follow-info'>
          <p className='card-bold-text'>{user.followers}</p>
          <p className='card-simple-text'>Followers</p>
        </div>
        <div className='follow-info'>
          <div className='follow-info-content'>
            <p className='card-bold-text'>{user.following}</p>
            <p className='card-simple-text'>Following</p>
          </div>
        </div>
      </div>
      <div className='card-bottom-button'>
        <button className='success-button card-bottom-button' onClick={()=>handleGetUser()}>Get New User</button>
      </div>
    </div>
  )
}

export default Card
