// src/App.js
import React, { useState } from 'react';
import ModelViewer from './ModelViewer';
import QRCodeGenerator from './QRCodeGenerator';
// Assicurati che ARViewer sia importato correttamente
import ARViewer from './ARViewer';
import QRScanner from './QRScanner';

function App() {
  const [scannedData, setScannedData] = useState(null);
  const modelId = 'unique-model-id';

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  return (
    <div className="App">
      <h1>Visualizzatore Modello 3D</h1>
      <ModelViewer />
      <h2>QR Code Associato</h2>
      <QRCodeGenerator data={modelId} />
      <h2>Scannerizza il QR Code</h2>
      {!scannedData && <QRScanner onScan={handleScan} />}
      {scannedData === modelId && (
        <div>
          <h2>Realtà Aumentata</h2>
          <ARViewer />
        </div>
      )}
      {scannedData && scannedData !== modelId && (
        <p>QR Code non riconosciuto.</p>
      )}
    </div>
  );
}

export default App;
