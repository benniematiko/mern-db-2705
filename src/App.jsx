import React, { useState } from 'react';
import CarForm from './components/CarForm';
import CarCard from './components/CarCard';

function App() {
  // Mock data to simulate cars already residing in a database
  const [cars, setCars] = useState([
    { id: 1, make: 'Tesla', model: 'Model 3', year: 2023, price: 38990, fuelType: 'Electric', imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400' },
    { id: 2, make: 'Ford', model: 'Mustang GT', year: 2022, price: 42000, fuelType: 'Gas', imageUrl: 'https://images.unsplash.com/photo-1612462551868-f6112234d064?w=400' }
  ]);

  // Handler to simulate deleting a car locally
  const handleDeleteCar = (id) => {
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1>🏎️ Car Inventory Dashboard</h1>
      <p>Welcome to your MERN CRUD app workspace.</p>
      <hr style={{ border: '0.5px solid #eee', margin: '20px 0' }} />
      
      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        
        {/* Form Column */}
        <CarForm />
        
        {/* Inventory Listings Column */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>🚘 Showroom Floor</h3>
          {cars.length === 0 ? (
            <p style={{ color: '#888' }}>The garage is empty. Add a car to get started!</p>
          ) : (
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {cars.map(car => (
                <CarCard key={car.id} car={car} onDelete={handleDeleteCar} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;