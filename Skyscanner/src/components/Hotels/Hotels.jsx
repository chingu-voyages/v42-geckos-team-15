import React, { useState } from "react";
import "./hotels.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Child1, Child2 } from "./child";
import { hotels1, hotels2 } from "../Data";

const Hotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCitie, setSelectedCitie] = useState("Las Vegas");
  const cities = ["Las Vegas", "New York", "Orlando", "Miami", "Los Angeles"];

  const children = [
    <Child1 hotels={hotels1} selectedCitie={selectedCitie} />,
    <Child2 hotels={hotels2} selectedCitie={selectedCitie} />,
  ];
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
          <p className="more">View more hotels</p>
          <div className="hotels-buttons">
            <button
              className="buttons-icon"
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? currentIndex : currentIndex - 1
                )
              }
              disabled={currentIndex === 0}
            >
              <AiOutlineLeft />
            </button>
            <button
              className="buttons-icon"
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % children.length)
              }
              disabled={currentIndex === children.length - 1}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
      {children[currentIndex]}
    </div>
  );
};

export default Hotels;
