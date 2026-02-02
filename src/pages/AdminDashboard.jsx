import React, { useState, useEffect } from 'react';
import api from '../api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/admin/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  const handleVerify = async (userId) => {
    try {
      await api.post('/admin/verify', { userId });
      fetchUsers();
    } catch (err) {
      alert('Action failed');
    }
  };

  const downloadExcel = () => {
    setDownloading(true);
    try {
      // Full CSV export implementation including all columns
      const headers = [
        'ID', 'First Name', 'Last Name', 'Email', 'Role', 
        'Country Code', 'Mobile Number', 'Address', 'City', 
        'Zip Code', 'Postal Code', 'Country', 'Category', 
        'Payment Status', 'Transaction ID', 'Token', 
        'Created At', 'Updated At'
      ];
      
      const csvContent = [
        headers.join(','),
        ...users.map(u => [
          u.id, 
          `"${u.firstName || ''}"`, 
          `"${u.lastName || ''}"`, 
          u.email, 
          u.role,
          u.countryCode,
          u.mobileNumber,
          `"${u.address || ''}"`,
          `"${u.city || ''}"`,
          u.zipCode,
          u.postalCode,
          `"${u.country || ''}"`,
          u.category,
          u.paymentStatus, 
          u.transactionId || '', 
          u.token || '',
          u.createdAt,
          u.updatedAt
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `participants_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("Failed to export CSV");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container" style={{ maxWidth: '100%' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1>Admin Dashboard</h1>
            <button 
              onClick={downloadExcel} 
              className="btn" 
              style={{ backgroundColor: '#27ae60' }}
              disabled={downloading}
            >
              {downloading ? 'Downloading...' : 'Download Excel (CSV)'}
            </button>
          </div>
          
          {error && <div className="error-message">{error}</div>}

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f2f2f2', textAlign: 'left' }}>
                  <th style={{ padding: '1rem' }}>Name</th>
                  <th style={{ padding: '1rem' }}>Email</th>
                  <th style={{ padding: '1rem' }}>Mobile</th>
                  <th style={{ padding: '1rem' }}>Category</th>
                  <th style={{ padding: '1rem' }}>Transaction ID</th>
                  <th style={{ padding: '1rem' }}>Status</th>
                  <th style={{ padding: '1rem' }}>Token Detail</th>
                  <th style={{ padding: '1rem' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '1rem' }}>{user.firstName} {user.lastName}</td>
                    <td style={{ padding: '1rem' }}>{user.email}</td>
                    <td style={{ padding: '1rem' }}>{user.mobileNumber}</td>
                    <td style={{ padding: '1rem' }}>{user.category}</td>
                    <td style={{ padding: '1rem' }}>{user.transactionId || '-'}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        color: user.paymentStatus === 'VERIFIED' ? 'green' : user.paymentStatus === 'UPLOADED' ? 'orange' : 'red',
                        fontWeight: 'bold'
                      }}>
                        {user.paymentStatus}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>{user.token || '-'}</td>
                    <td style={{ padding: '1rem' }}>
                        <button 
                          onClick={() => handleVerify(user.id)} 
                          className="btn" 
                          style={{ 
                            padding: '0.25rem 0.75rem', 
                            fontSize: '0.8rem',
                            backgroundColor: user.paymentStatus === 'VERIFIED' ? '#e74c3c' : '#2ecc71'
                          }}
                        >
                          {user.paymentStatus === 'VERIFIED' ? 'Unverify' : 'Verify'}
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
