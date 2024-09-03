import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Modal } from 'antd';
import 'leaflet/dist/leaflet.css';

const TimeZoneMap = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);

  const timeZones = [
    { position: [34.0522, -118.2437], label: 'Pacific Time', timezone: 'America/Los_Angeles' },
    { position: [39.7392, -104.9903], label: 'Mountain Time', timezone: 'America/Denver' },
    { position: [41.8781, -87.6298], label: 'Central Time', timezone: 'America/Chicago' },
    { position: [40.7128, -74.0060], label: 'Eastern Time', timezone: 'America/New_York' },
  ];

  const showModal = (zone) => {
    setSelectedZone(zone);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="time-zone-map">
      <MapContainer center={[39.8283, -98.5795]} zoom={4} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {timeZones.map((zone, index) => (
          <Marker key={index} position={zone.position} eventHandlers={{ click: () => showModal(zone) }}>
            <Popup>{zone.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedZone && (
        <Modal title={selectedZone.label} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Timezone: {selectedZone.timezone}</p>
          <p>Current Time: {/* Display current time for this timezone here */}</p>
        </Modal>
      )}
    </div>
  );
};

export default TimeZoneMap;
