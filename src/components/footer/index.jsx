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
      {/* <div className="textbox">
        <input className="text-wrapper-5" placeholder="Input your name"></input>
        
      </div>
      <div className="text-wrapper-6">E-flight</div>
      <img
        className="image"
        alt="Image"
        src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg"
      />
      <button className="button">
        <div className="text-wrapper-7">Subscribe</div>
      </button>
      <div className="text-wrapper-8">About us</div>
      <div className="text-wrapper-9">How to book</div>
      <div className="text-wrapper-10">Help center</div>
      <div className="text-wrapper-11">Flight</div>
      <div className="text-wrapper-12">Booking easily</div>
      <div className="text-wrapper-13">Promotions</div>
      <div className="contact-us-footer">
        <h2 className="text-wrapper-14">Contact us</h2>
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
      <div className="group">
        <h2 className="">© 2022 Company, Inc. • Privacy • Terms</h2>
      </div> */}
    </footer>
  );
};

export default Footer;
