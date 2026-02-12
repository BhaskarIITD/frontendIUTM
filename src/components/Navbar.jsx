import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/IUTAM-Logo-Site-.png';

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="navbar">
      {/* LEFT — Logo */}
      <div className="nav-left">
        <Link to="/" className="logo-wrap">
          <img src={logo} alt="IUTAM Logo" />
        </Link>
      </div>

      {/* CENTER — Links */}
      <nav className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/programme">Program</Link>
        <Link to="/delegates">Speakers</Link>
        <Link to="/accommodation">Travel & Stay</Link>

        {!user && (
          <Link to="/registration">Registration</Link>
        )}

        {user && <Link to="/dashboard">Dashboard</Link>}
        {user && user.role === 'ADMIN' && (
          <Link to="/admin">Admin</Link>
        )}
      </nav>

      {/* RIGHT — Auth / CTA */}
      <div className="nav-right">
        {token ? (
          <button className="btn-outline" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn-outline">
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
