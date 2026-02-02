import React, { useState, useEffect } from 'react';
import api from '../api';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const response = await api.get('/user/status');
      setUser(response.data);
      if (response.data.transactionId) {
        setTransactionId(response.data.transactionId);
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch status');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await api.put('/user/payment', { transactionId });
      setMessage('Transaction ID uploaded successfully. Verification pending.');
      fetchStatus();
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    }
  };

  if (!user) return <div className="page-content container">Loading...</div>;

  return (
    <div className="page-content">
      <div className="container">
        <div className="glass-card">
          <h1>Welcome, {user.firstName}</h1>
          <div style={{ marginTop: '2rem' }}>
            <h3>Payment Status: <span style={{ color: user.paymentStatus === 'VERIFIED' ? 'green' : 'orange' }}>{user.paymentStatus}</span></h3>
            {user.token && (
              <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', marginTop: '1rem' }}>
                Your Unique Token: <strong>{user.token}</strong>
              </div>
            )}
            
            <div style={{ marginTop: '2rem' }}>
              <h4>Payment Details</h4>
              <p>Please pay the registration fee to IIT Delhi (Account Details Here).</p>
              
              <form onSubmit={handleUpload} style={{ marginTop: '1rem' }}>
                <div className="form-group">
                  <label>Transaction ID / Reference Number</label>
                  <input 
                    type="text" 
                    value={transactionId} 
                    onChange={(e) => setTransactionId(e.target.value)} 
                    className="form-control" 
                    placeholder="Enter Transaction ID"
                    disabled={user.paymentStatus === 'VERIFIED'}
                  />
                </div>
                {user.paymentStatus !== 'VERIFIED' && (
                  <button type="submit" className="btn">Update Transaction ID</button>
                )}
              </form>
              {message && <p style={{ color: 'green', marginTop: '0.5rem' }}>{message}</p>}
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
