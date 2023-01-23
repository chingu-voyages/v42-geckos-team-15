import React from "react";
import "./Trip.css";
import { cards } from "../Data";

const Trip = () => {
  return (
    <div className="trip-containner">
      <h2 className="title">Plan your perfect trip</h2>
      <p>
        Search flights, hotels & car rental to our most popular destinations
      </p>
      <div className="trip-cards-container">
        {cards.map((card) => (
          <div className="trip-card" key={card.id}>
            <div className="image">
              <img src={card.image} alt="Miami" />
            </div>
            <div className="content">
              <p className="city">{card.title}</p>
              <div className="options">
                <span>Flights</span>
                <span>Hotels</span>
                <span>Car Rental</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trip;
