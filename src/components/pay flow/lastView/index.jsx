import "./style.scss";

export const Ticket = () => {
  return (
    <div className="main_container">
      <img
        src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697914189/e-flight/mj0djtkrdmryg7pvkhl7.png"
        className="Secondary"
      />
      <img
        src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697914107/e-flight/cd8cwg2dmwo79mxcbsuf.png"
        className="Principal"
      />

      <div className="info">
        <div className="info_cloudy">
          <div className="img_container">
            <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697776020/e-flight/bdgedjk8t2mz7g95fqrw.svg" />
          </div>
          <p>Cloudy Airlines</p>
        </div>
        <div className="info_baggage">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697923961/e-flight/yvmtsmg88anbzi0gjolh.png" />
          <div>
            <p>2x23kg</p>
          </div>
          <div>
            <p>1x8kg</p>
          </div>
        </div>
        <div className="info_passenger_name">
            <h3>Passenger:</h3><h2>ANNA ANDERSON</h2>
        </div>
        <div className="info_class">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/u4xet5jz0lc4mnprjmzb.svg" />
          <p>Economy</p>
        </div>
        <div className="info_time_start">
          <p>23:15</p>
          <p>Houston (HOU)</p>
          <p>9 Feb, 2023</p>
        </div>
        <div className="info_time_end">
          <p>1:25</p>
          <p>Los Angeles (LAS)</p>
          <p>10 Feb, 2023</p>

        </div>
        <div className="info_duration">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/lrhbnfguezc5vpcgv9vw.svg" />
          <p>2h 10m</p>
        </div>
        <div className="info_footer">
          <p>Check-in:9th Feb 2023 at 21:20</p>
          <p>*All time displayed are local</p>
        </div>
      </div>
      <div className="barcode">
      <h2 className="info_title">
        <img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1697320168/Booking-Flight-Sprint/kzc4raqakpiworncmu25.svg" />
        E-flight
      </h2>
      <div className="info_ID">
        <p>Booking ID</p>
        <p>65980165</p>
      </div>
      <div className="info_airline_code">
        <p>Airline Booking Code</p>
        <p>CA-6018</p>
      </div>
      </div>
    </div>
  );
};

export default Ticket;
