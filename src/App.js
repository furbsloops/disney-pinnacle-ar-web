// src/App.js
import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import QRScanner from './QRScanner';
import ARViewer from './ARViewer';
import './App.css';

function App() {
  const [isQRCodeScanned, setIsQRCodeScanned] = useState(false);

  const handleQRCodeScanned = (data) => {
    if (data === 'nft-access') {
      setIsQRCodeScanned(true);
    }
  };

  return (
    <div className="App">
      {!isQRCodeScanned ? (
        <div className="container">
          <div className="qr-code">
            <h2>Scansiona questo QR Code con il tuo dispositivo</h2>
            <QRCodeGenerator />
          </div>
          <div className="camera-preview">
            <h2>Inquadra il QR Code</h2>
            <QRScanner onScan={handleQRCodeScanned} />
          </div>
        </div>
      ) : (
        <ARViewer />
      )}
    </div>
  );
}

export default App;
