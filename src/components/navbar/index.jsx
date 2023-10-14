import "./style.sass";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="overlap-group">
        <img className="oval" alt="Oval" src="oval-1.svg" />
      </div>
      <div className="text-wrapper">E-flight</div>
      <img className="frame" alt="Frame" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg " />
      <div className="rectangle-wrapper">
        <img className="rectangle" alt="Rectangle" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320776/Booking-Flight-Sprint/ao8rezhj2pvwtckni3cb.png " />
      </div>
      <img className="img" alt="Frame" src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320399/Booking-Flight-Sprint/izn1yycloyjf861vzwtf.svg " />
      <div className="div">USD</div>
    </div>
  );
};
