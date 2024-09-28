// src/QRScanner.js
import React, { useState } from 'react';
import { useZxing } from 'react-zxing';

export default function QRScanner({ onScan }) {
  const [error, setError] = useState(null);

  const { ref } = useZxing({
    onResult(result) {
      onScan(result.getText());
    },
    onError(err) {
      console.error(err);
      setError(err);
    },
  });

  return (
    <div>
      <video ref={ref} style={{ width: '100%' }} />
      {error && <p>Errore nella scansione: {error.message}</p>}
    </div>
  );
}
