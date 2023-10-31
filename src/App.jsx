import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import Login from "./pages/login/Login";
import "./App.scss";
import OffcanvasDetails from "./components/Offcanvas/OffcanvasDetails";
import LastView from "./components/pay flow/LastView";
import SecondView from "./components/pay flow/contact";

import "./App.scss";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
          <OffcanvasDetails/>
        {/* <LastView/> */}
        <SecondView />
        <Footer />
      </div>
    </>
  );
}

export default App;


