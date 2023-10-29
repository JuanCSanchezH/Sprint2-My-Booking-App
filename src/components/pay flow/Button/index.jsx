import "./style.scss";
import { Button } from "react-bootstrap";

const ButtonLastView = () => {
  return (
      <div className="buttonLastView__container">
        <Button className="buttonLastView" size="lg">Send to my e-mail</Button>
      </div>
  );
};

export default ButtonLastView;
