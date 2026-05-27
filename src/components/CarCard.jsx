import React from 'react';

// We destructured car and onDelete from our props
function CarCard({ car, onDelete }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      width: '240px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between'
    }}>
      <img 
        src={car.imageUrl || 'https://via.placeholder.com/150'} 
        alt={`${car.make} ${car.model}`}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
      />
      <div>
        <h4 style={{ margin: '5px 0' }}>{car.year} {car.make} {car.model}</h4>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '14px' }}>Fuel: {car.fuelType}</p>
        <h3 style={{ margin: '10px 0 15px 0', color: '#28a745' }}>${Number(car.price).toLocaleString()}</h3>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <button style={{ flex: 1, padding: '6px', background: '#ffc107', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Edit
        </button>
        <button 
          onClick={() => onDelete(car.id)}
          style={{ flex: 1, padding: '6px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Scrap
        </button>
      </div>
    </div>
  );
}

export default CarCard;