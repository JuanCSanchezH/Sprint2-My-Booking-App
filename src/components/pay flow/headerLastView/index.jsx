import "./style.scss";

const HeaderLastView = () => {
  return (
    <div className="headerLastView">
      <div className="headerLastView__title">
        <h1>My Booking</h1>
      </div>
      <div className="box">
        <div className="group">
          <div className="overlap-group">
            <div className="container">
              <div className="rectangle" />
            </div>
            <div className="div" />
            <div className="container-2" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
          <div className="spans">
            <span>Booking</span>
            <span>Purchase</span>
            <span>Get your E-ticket</span>
          </div>
        </div>
      </div>
      <div className="headerLastView__container">
        <h2 className="headerLastView__subtitle">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1698614191/e-flight/psavx0bm5iqkuhvgoxct.png" />
          Your Flight is booked successfully
        </h2>
        <span>Present E-ticket and valid indentification at check-in</span>
      </div>
    </div>
  );
};

export default HeaderLastView;
