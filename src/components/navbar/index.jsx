import "../navbar/style.scss";

const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="overlap-group">
        <img alt="Oval" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg " />
        <p className="text-wrapper">E-flight</p>
      </div>
      <div className="frame">
        <p>USD</p>
        <img alt="Frame" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320399/Booking-Flight-Sprint/izn1yycloyjf861vzwtf.svg " />
        <img alt="Frame" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320492/Booking-Flight-Sprint/wpecgjsdm6agpmgmtzas.svg" />
        <div>
          <img className="user-img" alt="Rectangle" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320776/Booking-Flight-Sprint/ao8rezhj2pvwtckni3cb.png " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
