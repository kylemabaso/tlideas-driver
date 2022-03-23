import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
      if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
              setStatus(null);
              setLat(position.coords.latitude);
              setLng(position.coords.longitude);
          }, () => {
              setStatus('Unable to retrieve your location');
          });
      }
  }

return (
  <div className="App">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Driver App</h2>
        <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
        <div class="card-actions justify-end">
          <button onClick={getLocation} class="btn btn-primary">Waste Collected</button>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
