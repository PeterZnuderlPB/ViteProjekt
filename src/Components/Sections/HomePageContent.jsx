import { useState } from "react";
import "./HomePageContent.css";
import Card from "../General/Card";

const card_data = [
    {
        'header': 'Prva karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Druga karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Tretja karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Četrta karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Peta karta',
        'content': 'description... fdsfs',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Šesta karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    },
    {
        'header': 'Sedma karta',
        'content': 'description...',
        'date': new Date(),
        'image': 'https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640'
    }
]

const HomePageContent = (props) => {
  return (
    <div className="homepage-content">
      <h1>Recent Activity</h1>
      <div className="cards-container">
        {card_data.map((card_data, index) => (
            <Card key={index} {...card_data} />
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
