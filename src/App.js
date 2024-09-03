import React, { useState, useEffect } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import TimeZoneMap from './components/TimeZoneMap';
import TimeConverter from './components/TimeConverte';
import TimeFormatToggle from './components/TimeFormatToggle';
import { TimePicker } from 'antd';
import Timeline from 'antd';
import AppContext from 'antd/es/app/context';



import moment from 'moment'; 

function App() {
  const [is24HourFormat, setIs24HourFormat] = useState(() => {
    return JSON.parse(localStorage.getItem('is24HourFormat')) || false;
  });

  useEffect(() => {
    localStorage.setItem('is24HourFormat', JSON.stringify(is24HourFormat));
  }, [is24HourFormat]);

  const handleFormatToggle = (is24Hour) => {
    setIs24HourFormat(is24Hour);
  };

  const formatTime = (time) => {
    return is24HourFormat ? moment(time).format('HH:mm:ss') : moment(time).format('h:mm:ss A');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Time Zone App</h1>
        <TimeFormatToggle onToggle={handleFormatToggle} />
      </header>
      <div className="time-displays">
        <TimeDisplay timezone="America/Los_Angeles" label="Pacific Time" formatTime={formatTime} />
        <TimeDisplay timezone="America/Denver" label="Mountain Time" formatTime={formatTime} />
        <TimeDisplay timezone="America/Chicago" label="Central Time" formatTime={formatTime} />
        <TimeDisplay timezone="America/New_York" label="Eastern Time" formatTime={formatTime} />
      </div>
      <div className="map-and-converter">
        <TimeConverter />
        <TimeZoneMap />
      </div>
    </div>
  );
}

export default App;
