// src/ModelViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const modelPath = `${process.env.PUBLIC_URL}/models/model.glb`;
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} dispose={null} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ height: '500px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
