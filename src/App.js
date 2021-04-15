import Map from './components/Map.js';
import {useState, useEffect} from 'react';
import Header from './components/Header'
import Column from './components/Column'

function App() {

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
    }
    fetchEvents()
    console.log(eventData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Map eventData={eventData}/>
      <Column eventData={eventData}/>
    </div>
  );
}

export default App;
