import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import LastView from "./components/pay flow/LastView";

import "./App.scss";
import MyStepper from "./components/pay flow/passengerDetails/stepper";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <LastView/>
        <MyStepper />
        <Footer />
      </div>
    </>
  );
}

export default App;


