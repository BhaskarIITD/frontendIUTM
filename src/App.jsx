import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { Programme, Delegates, Accommodation, Transport } from './pages/ContentPages';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/delegates" element={<Delegates />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
