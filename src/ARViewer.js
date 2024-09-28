// src/ARViewer.js
import React from 'react';

function ARViewer({ smallPreview }) {
  const sceneStyle = smallPreview
    ? { width: '200px', height: '150px' }
    : { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' };

  return (
    <a-scene
      embedded
      arjs="trackingMethod: best; sourceType: webcam;"
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      style={sceneStyle}
    >
      <a-marker type="pattern" url={`${process.env.PUBLIC_URL}/data/patt.qrcode`}>
        <a-entity
          gltf-model={`${process.env.PUBLIC_URL}/models/model.glb`}
          scale="0.5 0.5 0.5"
          position="0 0 0"
        ></a-entity>
      </a-marker>
      <a-camera></a-camera>
    </a-scene>
  );
}

export default ARViewer;
