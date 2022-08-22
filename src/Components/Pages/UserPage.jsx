import { useState, useEffect } from 'react'
import { getUser } from '../../helper/api';
import './UserPage.css'

const UserPage = (props) => {
  const [user, setUser] = useState({});
  const getData = async () => {
    const data = await getUser();
    setUser(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='home-page'>
        <h1>Podatki uporabnika</h1>
        <pre>
          {JSON.stringify(user)}
        </pre>
    </div>
  )
}

export default UserPage