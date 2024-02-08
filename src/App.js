// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/home';
import Track from './Components/trackOrder';
import Nav from "./Components/Nav";
import Header from './Components/header';
import Services from './Components/services';
import Contact from './Components/contact';


function App() {
  return (
    <div className="App">
       <Router>
        <Nav />
        {/* <Header/> */}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
