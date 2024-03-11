// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
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
        <Route path="/home" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
