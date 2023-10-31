import "./style.scss";
import { Button } from "react-bootstrap";

const ButtonLastView = () => {
  const sendEmail = () => {
    const emailAddress = "daesmapo@gmail.com"; 
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
      <div className="buttonLastView__container">
        <Button className="buttonLastView" size="lg" onClick={sendEmail}>Send to my e-mail</Button>
      </div>
  );
};

export default ButtonLastView;
