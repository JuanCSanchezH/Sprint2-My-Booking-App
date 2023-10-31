import Footer from "./components/footer";
import Navbar from "./components/navbar/index";
import Home from './components/home/Home'
import "./App.scss";
function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
