import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    countryCode: '+1',
    mobileNumber: '',
    address: '',
    city: '',
    zipCode: '',
    postalCode: '',
    country: '',
    category: 'Delegate' // Default
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await api.post('/auth/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-card">
          <div className="page-header">
            <h1>Registration</h1>
            <p>Join the IUTAM Symposium 2026</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" required />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Country Code</label>
                <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="form-control">
                  <option value="+1">+1 (USA/Canada)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  {/* Add more as needed */}
                </select>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="form-control" required />
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control" required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="form-control" required />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className="form-control" />
              </div>
            </div>

            <div className="form-group">
              <label>Registration Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="form-control">
                <option value="Delegate">Delegate</option>
                <option value="Student">Student</option>
                <option value="Accompanying Person">Accompanying Person</option>
              </select>
            </div>

            <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }} disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
