import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import LastView from "./components/pay flow/LastView";
import Login from "./pages/login/Login";
import "./App.scss";

import OffcanvasDetails from "./components/Offcanvas/OffcanvasDetails";
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <LastView/>
          <OffcanvasDetails/>
        <Footer />
      </div>
    </>
  );
}

export default App;
