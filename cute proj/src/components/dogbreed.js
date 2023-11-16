import React, { useState } from 'react';
import Breeddata from './breeddata';
import { Link } from 'react-router-dom';

const Dogbreed = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);

  const filteredFood = Breeddata.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setSelectedFood(null);
  };

  const handleCardClick = (food) => {
    setSelectedFood(food);
  };

  return (
    
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{display:"inline-block"}}>Search:</h1>
      <input
        type="text"
        placeholder="Search for dog..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '2px solid pink',
          marginRight: '10px',
          marginBottom: '20px',
          width: '300px',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', marginTop: '20px' }}>
        {filteredFood.map((food, index) => (
          <div 
            key={index} 
            style={{ 
              border: '4px solid pink', 
              borderRadius: '8px', 
              padding: '20px', 
              position: 'relative',
              color:'lightseagreen'
            }}
          >
            <h3>{food.name}</h3>
            <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
              <img 
                src={food.image} 
                alt={food.name} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  position: 'absolute', 
                  objectFit: 'cover', 
                  top: '0', 
                  left: '0', 
                  borderRadius: '8px' 
                }} 
                onClick={() => handleCardClick(food)}
              />
            </div>
            {selectedFood === food && (
              <div style={{ background: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '0 0 8px 8px' }}>
                <h4  style={{ color:'pink'}}>Short Information:</h4>
                <p>Name: {food.name}</p>
                <p>Price: {food.price}</p>         
                <Link to='/Contact'><button style={{ color:'pink',border:'2px solid '}}>CONTACT NOW</button></Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Dogbreed;