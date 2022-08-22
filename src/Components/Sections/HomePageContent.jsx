import { useState, useEffect } from "react";
import "./HomePageContent.css";
import Card from "../General/Card";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../helper/api";

const HomePageContent = (props) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const showUserData = () => {
    navigate("/user");
  };
  return (
    <div className="homepage-content">
      <h1>Recent Activity</h1>
      <div className="cards-container">
        {users.map((user, index) => {
          const cardData = {
            image: user.avatar,
            header: `${user.first_name} ${user.last_name}`,
            date: new Date(user.date_of_birth)
          };
          return <Card key={index} {...cardData} onClickFunction={showUserData} />;
        })}
      </div>
    </div>
  );
};

export default HomePageContent;
