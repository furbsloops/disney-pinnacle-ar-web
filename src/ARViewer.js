// src/ARViewer.js
import React from 'react';
import 'aframe';
import 'ar.js';

function ARViewer() {
  return (
    <a-scene
      embedded
      arjs="trackingMethod: best; sourceType: webcam;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <a-marker type="pattern" url="data/patt.qrcode">
        <a-entity
          gltf-model={`${process.env.PUBLIC_URL}/models/model.glb`}
          scale="0.5 0.5 0.5"
          position="0 0 0"
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default ARViewer;
