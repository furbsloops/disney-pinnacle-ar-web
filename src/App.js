// src/App.js
import React, { useState } from 'react';
import QRScanner from './QRScanner';
import ARViewer from './ARViewer';
import './App.css';

function App() {
  const [isQRCodeScanned, setIsQRCodeScanned] = useState(false);

  const handleQRCodeScanned = (data) => {
    // Supponiamo che 'nft-access' sia il dato del QR code valido
    if (data === 'nft-access') {
      setIsQRCodeScanned(true);
    }
  };

  return (
    <div className="App">
      {!isQRCodeScanned ? (
        <QRScanner onScan={handleQRCodeScanned} />
      ) : (
        <ARViewer />
      )}
    </div>
  );
}

export default App;
