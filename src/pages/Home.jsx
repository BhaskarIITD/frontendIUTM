import React from 'react';

const Home = () => {
  return (
    <div className="page-content">
      <div className="hero-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>IUTAM Symposium 2026</h1>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>
          New Avenues in Mechanics of Solids: Exploring Opportunities at Multi-Physics Cross-Roads
        </p>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Cambridge 19 - 22 April 2026</p>
      </div>

      <div className="container">
        <div className="glass-card">
          <h2>Welcome</h2>
          <p>
            The IUTAM Symposium on "New Avenues in Mechanics of Solids" aims to bring together leading researchers 
            and young scientists to discuss the latest developments and future directions in the field.
          </p>
          <p>
            The symposium will focus on multi-physics interactions, including electro-magneto-mechanics, 
            chemomechanics, and biomechanics, across various length scales.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Chairs</h3>
            <p><strong>Antonio De Simone</strong>, Scuola Superiore Sant'Anna</p>
            <p><strong>Vikram Deshpande</strong>, University of Cambridge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
