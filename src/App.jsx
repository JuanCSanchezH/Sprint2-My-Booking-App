import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import LastView from "./components/pay flow/LastView";

import "./App.scss";
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <LastView/>
        <Footer />
      </div>
    </>
  );
}

export default App;
