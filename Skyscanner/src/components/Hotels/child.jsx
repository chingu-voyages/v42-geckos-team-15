import { FaMapPin } from "react-icons/fa";

function Child1({ hotels, selectedCitie }) {
  return (
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
  );
}

function Child2({ hotels, selectedCitie }) {
  return (
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
  );
}

export { Child1, Child2 };
