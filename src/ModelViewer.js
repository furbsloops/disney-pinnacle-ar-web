// src/ModelViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/models/model.glb', true); // Aggiorna il percorso qui
  return <primitive object={gltf.scene} dispose={null} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '500px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
