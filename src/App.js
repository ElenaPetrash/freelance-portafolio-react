//import './App.css';
import "./styles/main.css";

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <Home />*/}
     <Projects/>
  {/*<Contacts/>*/}
      <Footer />
    </div>
  );
}

export default App;
