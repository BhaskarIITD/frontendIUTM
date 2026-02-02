import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // TODO: Get auth state from context
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">IUTAM 2026</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programme">Programme</Link></li>
        {!user && <li><Link to="/registration">Registration</Link></li>}
        <li><Link to="/delegates">Delegates</Link></li>
        <li><Link to="/accommodation">Accommodation</Link></li>
        <li><Link to="/transport">Transport</Link></li>
        {user && (
          <li><Link to="/dashboard">Dashboard</Link></li>
        )}
        {user && user.role === 'ADMIN' && (
          <li><Link to="/admin">Admin</Link></li>
        )}
      </ul>
      <div className="navbar-auth">
        {token ? (
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        ) : (
          <Link to="/login" className="btn-login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
