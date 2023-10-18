import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import PayFlow from "./components/pay flow";

import "./App.scss";
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <PayFlow />
        <Footer />
      </div>
    </>
  );
}

export default App;
