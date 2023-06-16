import { useEffect, useState } from 'react';
import './App.css';
import { fetchCoordinates } from './service';

type Coordinates = {
  latitude: number;
  longitude: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude });
    }
    fetchData();
  }, []);

  return (
    <h1>International Space Station Location Tracker</h1>
  );
}

export default App;
