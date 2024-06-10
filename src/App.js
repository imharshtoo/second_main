// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import BarGraph from './components/BarGraph';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import './App.css';

const data1 = {
  labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 1, 4, 5, 6, 7, 8, 12],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [6, 10, 4, 8, 7],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/bargraph1" element={<BarGraph data={data1} />} />
          <Route path="/bargraph2" element={<BarGraph data={data2} />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sentiment" element={<Sentiment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
