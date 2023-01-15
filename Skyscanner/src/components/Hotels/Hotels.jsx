import React, { useState } from "react";
import "./hotels.css";
import { FaMapPin } from "react-icons/fa";
const Hotels = () => {
  const [selectedCitie, setSelectedCitie] = useState("Las Vegas");
  const cities = ["Las Vegas", "New York", "Orlando", "Miami", "Los Angeles"];
  const hotels = [{}];
  return (
    <div className="hotels-container">
      <div className="hotels-title">
        <h1>Plan your next staycation</h1>
      </div>
      <div className="hotels-middle">
        <div className="hotels-tabs">
          {cities.map((city, index) => (
            <div
              key={index}
              className={`hotels-tab ${
                selectedCitie === city ? "selected" : ""
              }`}
              onClick={() => setSelectedCitie(city)}
            >
              {city}
            </div>
          ))}
        </div>
        <div className="hotels-seemore">
          <p>View more hotels</p>
          <div className="hotels-buttons">
            <p className="buttons-icon">Previous</p>{" "}
            <p className="buttons-icon">Next</p>
          </div>
        </div>
      </div>
      <div className="hotels-cards">
        <div className="hotels-card">
          <div className="hotels-card-header">
            <img
              src={"/images/rmca.jpg"}
              alt="hotel image"
              className="hotel-image"
            />
            <div className="card-reviews">
              <div className="pontuation">pontuação</div>
              <div className="icon-review">
                <div className="icon">icone</div>
                <div className="reviews">reviews</div>
              </div>
            </div>
          </div>
          <div className="hotels-card-body">
            <div className="body-up">
              <FaMapPin />
              <div className="body-location">
                <div className="p">{selectedCitie}</div>
                <div className="p">country</div>
              </div>
            </div>
            <div className="body-middle">
              <h2>Hotel Name</h2>
            </div>
            <div className="body-down">
              <p>stars</p>
              <div className="hotel-price">
                <p>value</p>
                <p>per night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
