import "../flyDetails/style.scss";

export const FlyDetails = () => {
  return (
    <div className="fly_details_container">
      <h2 className="fly_details_title">
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg" />
        Houston - Los Angeles
      </h2>
      <hr />
      <div className="fly_details_cloudy">
        <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697776020/e-flight/bdgedjk8t2mz7g95fqrw.svg" />
        <p>Cloudy Airlines</p>
      </div>
      <div className="fly_details_date">
        <p>9</p>
        <p>Feb, 2023</p>
      </div>
      <div className="fly_details_destiny">
        <p>HOU - LAS</p>
      </div>
      <div className="fly_details_class">
        <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/u4xet5jz0lc4mnprjmzb.svg" />
        <p>Economy</p>
      </div>
      <div className="fly_details_time">
        <p>23:15 - 1:25</p>
        </div>
        <div className="fly_details_duration">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/lrhbnfguezc5vpcgv9vw.svg" />
            <p>2h 10m</p>
        </div>
        <div className="fly_details_scale">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697777028/e-flight/xynaassdoizwy9ygpjol.svg" />
          <p>Direct</p>
        </div>
        <hr />
        <div className="fly_details_benefits">
          <div className="fly_details_benefits_refundable">
            <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/w0dh6kvu2srueizf4bjm.svg" />
            <p>Refundable</p>
          </div>
          <div className="fly_details_benefits_reschedule">
            <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697777396/e-flight/dosggwhusywcrgxexqtx.svg" />
            <p>Reschedule Available</p>
            </div>
        </div>
    </div>
  );
}
export default FlyDetails;