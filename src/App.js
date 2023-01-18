import React from 'react';
import Main from './Main';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

function App() {

  return (
    <body>
      <header>
        <img src='Little lemon logo.svg' className="App-logo" alt="littlelemon" />
        <div className="App">
          <nav className="navbar">
            <Link to ="/" className="nav-item">Home</Link>
            <Link to="/about-us" className="nav-item">About Us</Link>
            <Link to="/reservation" className="nav-item">Reservation</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>
          <Routes>
            <Route path ="/" element={<Header />} />
            <Route path ="/about-us" element={<Main />} />
            <Route path ="/reservation" element={<Nav />} />
            <Route path ="/contact" element={<Footer />} />
          </Routes>
        </div>
      </header>
      <main>
      </main>
      <footer className='footer'>
        <p>Copyright Little Lemon Logo</p>
      </footer>
    </body>
  );
}

export default App;
