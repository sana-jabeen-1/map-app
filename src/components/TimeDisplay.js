import React, { useState, useEffect } from 'react';
//import moment from 'moment'; // or dayjs
import moment from 'moment-timezone';

const TimeDisplay = ({ timezone, label, formatTime }) => {
  const [time, setTime] = useState(formatTime(moment().tz(timezone)));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(moment().tz(timezone)));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone, formatTime]);

  return (
   <div className="time-display">
    
      <h2>{label}</h2>
      <p>{time}</p>
    </div>
  );
};

export default TimeDisplay;
