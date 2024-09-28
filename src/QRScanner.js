// src/QRScanner.js
import React from 'react';
import { useZxing } from 'react-zxing';

function QRScanner({ onScan }) {
  const { ref } = useZxing({
    onResult(result) {
      onScan(result.getText());
    },
  });

  return (
    <div>
      <h2>Inquadra il QR Code</h2>
      <video ref={ref} style={{ width: '100%' }} />
    </div>
  );
}

export default QRScanner;
