import "./style.scss";
import Barcode from "react-barcode";

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
        <div className="info_top">
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
        </div>
        <div className="info_passenger_name">
          <span className="info_passenger_name_title">Passenger: </span>
          <span className="info_passenger_name_name">ANNA ANDERSON</span>
        </div>
        <div className="info_class">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/u4xet5jz0lc4mnprjmzb.svg" />
          <p>Economy</p>
        </div>
        <div className="info_time">
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
          <div className="info_barcode_vertical">
          <Barcode value="09197517 3759231 021 21 A" width={0.5} height={55} fontSize={7} background="#F8F9FA"/>
        </div>
        </div>
        <div className="info_duration">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1697775157/e-flight/lrhbnfguezc5vpcgv9vw.svg" />
          <p>2h 10m</p>
        </div>
        <div className="info_footer">
          <p>Check-in: 9th Feb 2023 at 21:20</p>
          <p>*All time displayed are local</p>
        </div>
      </div>
      <div className="barcode">
        <h2 className="barcode_title">
          <img src="https://res.cloudinary.com/dsgfgsjud/image/upload/v1698003495/e-flight/pnuh5cu0kad9nzyxyrm6.png" />
          E-flight
        </h2>
        <div className="barcode_ID">
          <p>Booking ID</p>
          <p>65980165</p>
        </div>
        <div className="barcode_airline_code">
          <p>Airline Booking Code</p>
          <p>CA-6018</p>
        </div>
        <div className="barcode_barcode">
        <Barcode value="09197517 3759231 021 21 A" width={0.5} height={55} fontSize={7} background="#0A7956" lineColor="#ffff"/>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
