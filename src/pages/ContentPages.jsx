import React from 'react';

const Programme = () => <div className="page-content"><div className="container glass-card"><h1>Programme</h1><p>Conference schedule will be announced soon.</p></div></div>;
import delegatesData from '../data/delegates.json';

const Delegates = () => (
  <div className="page-content">
    <div className="container glass-card" style={{ maxWidth: '1000px' }}>
      <h1>Delegates</h1>
      <div style={{ overflowX: 'auto', marginTop: '20px' }}>
        <table className="delegates-table" style={{ width: '100%', borderCollapse: 'collapse', color: 'black' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.2)' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>S. No.</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Affiliation</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Country</th>
            </tr>
          </thead>
          <tbody>
            {delegatesData.map((delegate) => (
              <tr key={delegate.sNo} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <td style={{ padding: '12px' }}>{delegate.sNo}.</td>
                <td style={{ padding: '12px' }}>{delegate.name}</td>
                <td style={{ padding: '12px' }}>{delegate.affiliation}</td>
                <td style={{ padding: '12px' }}>{delegate.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
const Accommodation = () => <div className="page-content"><div className="container glass-card"><h1>Accommodation</h1><p>Details about accommodation options.</p></div></div>;
const Transport = () => <div className="page-content"><div className="container glass-card"><h1>Transport</h1><p>Information on getting to the venue.</p></div></div>;

export { Programme, Delegates, Accommodation, Transport };
