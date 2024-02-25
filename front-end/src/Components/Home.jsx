// Home.js
import React from 'react';
import LabImage from '../Images/1.jpg';
import Card from './Card';
import './Home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
      <img src={LabImage} alt="Lab interior with equipment" />
      <div className="text-container">
        <h2>Welcome to the ABC Laboratory</h2>
        <p>Book your lab appointment right now</p>
      </div>

      {/* Four cards */}
      <div className="card-container">
        <Card
          image={LabImage}
          name="Card 1"
          description="Description for Card 1"
        />
        <Card
          image={LabImage}
          name="Card 2"
          description="Description for Card 2"
        />
        <Card
          image={LabImage}
          name="Card 3"
          description="Description for Card 3"
        />
        <Card
          image={LabImage}
          name="Card 4"
          description="Description for Card 4"
        />
      </div>

    </div>
  );
}

export default Home;
