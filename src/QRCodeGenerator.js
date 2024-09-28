// src/QRCodeGenerator.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodeGenerator({ data }) {
  return (
    <div>
      <QRCodeCanvas value={data} size={256} />
    </div>
  );
}
