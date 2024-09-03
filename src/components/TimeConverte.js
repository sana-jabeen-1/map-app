import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';
import moment from 'moment'; // or dayjs




const { Option } = Select;

const TimeConverter = () => {
  const [inputTime, setInputTime] = useState('');
  const [inputZone, setInputZone] = useState('America/Los_Angeles');
  const [outputZone, setOutputZone] = useState('America/New_York');
  const [outputTime, setOutputTime] = useState('');

  const handleConvert = () => {
    const convertedTime = moment.tz(inputTime, inputZone).tz(outputZone).format('h:mm A');
    setOutputTime(convertedTime);
  };

  return (
    <div className="time-converter">
      <h2>Time Converter</h2>
      <Input
        placeholder="Enter time (e.g., 9:00 AM)"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />
      <Select defaultValue={inputZone} onChange={(value) => setInputZone(value)} style={{ width: 200, marginRight: 10 }}>
        <Option value="America/Los_Angeles">Pacific Time</Option>
        <Option value="America/Denver">Mountain Time</Option>
        <Option value="America/Chicago">Central Time</Option>
        <Option value="America/New_York">Eastern Time</Option>
      </Select>
      <span>to</span>
      <Select defaultValue={outputZone} onChange={(value) => setOutputZone(value)} style={{ width: 200, marginLeft: 10 }}>
        <Option value="Am erica/Los_Angeles">Pacific Time</Option>
        <Option value="America/Denver">Mountain Time</Option>
        <Option value="America/Chicago">Central Time</Option>
        <Option value="America/New_York">Eastern Time</Option>
      </Select>
      <Button onClick={handleConvert} style={{ backgroundColor: 'darkblue', color: 'white' }} >
        Convert
      </Button>
      {outputTime && <p style={{ color: 'darkblue' }}>Converted Time: {outputTime}</p>}
    </div>
  );
};

export default TimeConverter;
