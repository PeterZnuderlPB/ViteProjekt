import { useEffect, useState } from 'react'
import './Cards.css'
import Card from './Card'
import axios from 'axios'

const Cards = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([]);

  const addNewUser = data => {
    let userdata = data.results[0];

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

    users.push(newUser);

    if(users.length >= props.count){
      console.log("We have enough users");
      setIsLoading(false);
    }
  }

  const handleGetUser = () =>{
    console.log("Fetching user");
    axios.get("https://randomuser.me/api/")
    .then(response => addNewUser(response.data))
    .catch(err => console.log(err));
  }
 

  if(isLoading){

    for (let index = 0; index < props.count; index++) {
      handleGetUser();
    }

    return(
    <div className="card-container">
      <h2>We're loading data</h2>
    </div>
    )
  }



  var cards=[];
  for (var i=0; i<props.count; i++) {
    cards.push(<Card data={users[i]}/>)
  }

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default Cards
