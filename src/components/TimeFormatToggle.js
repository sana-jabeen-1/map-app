import React, { useState } from 'react';

const TimeFormatToggle = ({ onToggle }) => {
  const [is24Hour, setIs24Hour] = useState(false);

  const handleToggle = () => {
    setIs24Hour(!is24Hour);
    onToggle(!is24Hour);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={is24Hour} onChange={handleToggle} />
        {is24Hour ? '24-Hour Format' : '12-Hour Format'}
      </label>
    </div>
  );
};

export default TimeFormatToggle;
