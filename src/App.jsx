import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import "./App.scss";
import MyStepper from "./components/pay flow/passengerDetails/stepper";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <MyStepper />
        <Footer />
      </div>
    </>
  );
}

export default App;


