import React from "react";
import "../footer/style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="container__subscribe">
          <div className="container__subscribe__heading">
            <img
              alt="Flat"
              src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg"
            />
            <p>E-Flight</p>
          </div>
          <div className="container__subscribe__content">
            <div>
              <img
                src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320040/Vector_taqzea.png"
                alt=""
              />
              <input
                className="container__subscribe__content--input"
                type="text"
                placeholder="Input your email"
              />
            </div>
            <button className="container__subscribe__content--btn">
              Subscribe
            </button>
          </div>
        </div>
        <div className="container__aboutUs">
          <h2>About us</h2>
          <p>How to book</p>
          <p>Help center</p>
        </div>
        <div className="container__aboutUs">
          <h2>Flight</h2>
          <p>Booking easily</p>
          <p>Promotions</p>
        </div>
        <div className="container__contactUs">
          <h2>Contact us</h2>
          <div className="container__contactUs--icons">
            <img
              alt="Frame"
              src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320241/Frame_cdypsz.png "
            />
            <img
              alt="Frame"
              src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320240/Frame_1_l9xqq3.png"
            />
            <img
              alt="Frame"
              src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1697320240/Frame_2_nvbxom.png"
            />
          </div>
        </div>
      </div>
      <div className="company-content">
        <p>© 2022 Company, Inc. • Privacy • Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
