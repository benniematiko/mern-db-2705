import React, { useState } from 'react';

function CarForm() {
  // 1. Set up a single state object to capture all car fields
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    fuelType: 'Gas',
    imageUrl: ''
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value // Dynamically updates 'make', 'model', etc. based on input name
    });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Car Data to Backend:", carData);
    
    // TODO: This is where our Axios POST request will go later!
    
    // Clear the form after submit
    setCarData({ make: '', model: '', year: '', price: '', fuelType: 'Gas', imageUrl: '' });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px 0', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>➕ Add New Vehicle</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
        <input 
          type="text" name="make" placeholder="Make (e.g., Toyota)" 
          value={carData.make} onChange={handleChange} required 
        />
        
        <input 
          type="text" name="model" placeholder="Model (e.g., Camry)" 
          value={carData.model} onChange={handleChange} required 
        />
        
        <input 
          type="number" name="year" placeholder="Year" 
          value={carData.year} onChange={handleChange} required 
        />
        
        <input 
          type="number" name="price" placeholder="Price ($)" 
          value={carData.price} onChange={handleChange} required 
        />

        <select name="fuelType" value={carData.fuelType} onChange={handleChange}>
          <option value="Gas">Gas</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Diesel">Diesel</option>
        </select>

        <input 
          type="text" name="imageUrl" placeholder="Image URL (Optional)" 
          value={carData.imageUrl} onChange={handleChange} 
        />

        <button type="submit" style={{ padding: '8px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Car to Fleet
        </button>
      </form>
    </div>
  );
}

export default CarForm;