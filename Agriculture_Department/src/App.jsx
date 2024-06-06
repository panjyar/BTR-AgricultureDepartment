import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Routes/Home/Home.jsx";
import About from "./Routes/About/About.jsx";
import Contact from "./Routes/Contact/Contact.jsx";
import Notification from "./Routes/Notification/Notification.jsx";
import Gallery from "./Routes/Gallery/Gallery.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
