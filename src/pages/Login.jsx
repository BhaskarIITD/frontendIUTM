import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await api.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Dispatch a storage event to update other tabs/components listening
      window.dispatchEvent(new Event('storage'));

      if (response.data.user.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/'); // Or a user dashboard
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container" style={{ maxWidth: '500px' }}>
        <div className="glass-card">
          <div className="page-header">
            <h1>Login</h1>
            <p>Access your registration details</p>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="form-control" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className="form-control" 
                required 
              />
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }} disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
