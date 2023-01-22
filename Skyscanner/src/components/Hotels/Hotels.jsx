import React, { useState } from "react";
import "./hotels.css";
import { FaMapPin } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Hotels = () => {
  const [selectedCitie, setSelectedCitie] = useState("Las Vegas");
  const cities = ["Las Vegas", "New York", "Orlando", "Miami", "Los Angeles"];
  const hotels = [
    {
      name: "Vdara Hotel & Spa at Aria Las Vegas",
      city: "Las Vegas",
      price: "$308",
      stars: 5,
      point: 4.5,
      reviews: "20,924",
      image: "/images/rmca.jpg",
    },
    {
      name: "Trump International Hotel Las Vegas",
      city: "Las Vegas",
      price: "$145",
      stars: 5,
      point: 4.5,
      reviews: "15,557",
      image: "/images/rmca1.jpg",
    },
    {
      name: "The Cosmopolitan of Las Vegas",
      city: "Las Vegas",
      price: "$449",
      stars: 5,
      point: 4.0,
      reviews: "1,971",
      image: "/images/rmca2.jpg",
    },
    {
      name: "Hotel Riu Plaza New York Time Square",
      city: "New York",
      price: "$204",
      stars: 4,
      point: 4.5,
      reviews: "5,401",
      image: "/images/mca.jpg",
    },
    {
      name: "Even Hotel New York Times Square South, an IHG Hotel",
      city: "New York",
      price: "$162",
      stars: 4,
      point: 4.5,
      reviews: "1,640",
      image: "/images/mca1.jpg",
    },
    {
      name: "Wyndham Garden Chinatown",
      city: "New York",
      price: "$115",
      stars: 4,
      point: 4.5,
      reviews: "2,305",
      image: "/images/mca2.jpg",
    },
    {
      name: "SpringHill Suits by Marriot Orlando at MIllenia",
      city: "Orlando",
      price: "$115",
      stars: 4,
      point: 4.5,
      reviews: "2,305",
      image: "/images/orlando2.jpg",
    },
    {
      name: "Universal´s Loews Royal Pacific Resort",
      city: "Orlando",
      price: "$336",
      stars: 4,
      point: 4.5,
      reviews: "15,895",
      image: "/images/orlando1.jpg",
    },
    {
      name: "Hilton Grand Vacations Club Tuscany Village Orlando",
      city: "Orlando",
      price: "$159",
      stars: 4,
      point: 4.5,
      reviews: "6,321",
      image: "/images/orlando.jpg",
    },
    {
      name: "InterContinental Miami, an IHG Hotel",
      city: "Miami",
      price: "$259",
      stars: 4,
      point: 4.5,
      reviews: "7,600",
      image: "/images/miami.jpg",
    },
    {
      name: "Kimpton Epic Hotel, an IHG Hotel",
      city: "Miami",
      price: "$309",
      stars: 4,
      point: 4.5,
      reviews: "4,204",
      image: "/images/miami1.jpg",
    },
    {
      name: "Novotel Miami Brickell",
      city: "Miami",
      price: "$276",
      stars: 4,
      point: 4.5,
      reviews: "2,821",
      image: "/images/miami2.jpg",
    },
    {
      name: "Loews Hollywood Hotel",
      city: "Los Angeles",
      price: "$227",
      stars: 4,
      point: 4.5,
      reviews: "5,112",
      image: "/images/la.jpg",
    },
    {
      name: "Luxe Sunset Boulevard Hotel",
      city: "Los Angeles",
      price: "$171",
      stars: 4,
      point: 4.5,
      reviews: "1,950",
      image: "/images/la1.jpg",
    },
    {
      name: "Hotel Indigo - Los Angeles Downtown, an IHG Hotel",
      city: "Los Angeles",
      price: "$189",
      stars: 4,
      point: 4.5,
      reviews: "901",
      image: "/images/la2.jpg",
    },
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
            <p className="buttons-icon">
              <AiOutlineLeft />
            </p>{" "}
            <p className="buttons-icon">
              <AiOutlineRight />
            </p>
          </div>
        </div>
      </div>
      <div className="hotels-cards">
        {hotels
          .filter((hotel) => hotel.city === selectedCitie)
          .map((hotel) => (
            <div className="hotels-card">
              <div className="hotels-card-header">
                <img
                  src={hotel.image}
                  alt="hotel image"
                  className="hotel-image"
                />
                <div className="card-reviews">
                  <div className="pontuation">{hotel.point}</div>
                  <div className="icon-review">
                    <div className="icon">
                      <div className="rating">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div className="reviews">{hotel.reviews}</div>
                  </div>
                </div>
              </div>
              <div className="hotels-card-body">
                <div className="body-up">
                  <FaMapPin />
                  <div className="body-location">
                    <div className="p">{hotel.city}</div>
                    <div className="p">United States</div>
                  </div>
                </div>
                <div className="body-middle">
                  <h2>{hotel.name}</h2>
                </div>
                <div className="body-down">
                  <p>{hotel.stars}</p>
                  <div className="hotel-price">
                    <p>{hotel.price}</p>
                    <p>per night</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hotels;
