// src/QRCodeGenerator.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function QRCodeGenerator() {
  const qrValue = 'nft-access'; // The value to encode in the QR code

  return (
    <div>
      <QRCodeCanvas value={qrValue} size={256} />
    </div>
  );
}

export default QRCodeGenerator;
