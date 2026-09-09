'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

type LeafState = {
  x: number;
  y: number;
  z: number;
  speed: number;
  drift: number;
  driftFreq: number;
  rotSpeedX: number;
  rotSpeedZ: number;
  scale: number;
  offset: number;
};

const LEAF_COUNT_DESKTOP = 14;
const LEAF_COUNT_MOBILE = 7;

const createLeaves = (count: number): LeafState[] => {
  return Array.from({ length: count }, (_, i) => {
    const r1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    const r2 = Math.sin(i * 34.123 + 12.7) * 43758.5453;
    const r3 = Math.sin(i * 56.78 + 34.12) * 43758.5453;
    const f = (n: number) => n - Math.floor(n);
    return {
      x: (f(r1) - 0.5) * 14,
      y: f(r2) * 18 - 2,
      z: (f(r3) - 0.5) * 4 - 1.5,
      speed: 0.35 + f(r1 + 1) * 0.55,
      drift: 0.25 + f(r2 + 2) * 0.45,
      driftFreq: 0.35 + f(r3 + 3) * 0.5,
      rotSpeedX: 0.4 + f(r1 + 4) * 0.7,
      rotSpeedZ: 0.35 + f(r2 + 5) * 0.6,
      scale: 0.32 + f(r3 + 6) * 0.36,
      offset: f(r1 + 7) * Math.PI * 2,
    };
  });
};

export const FallingLeavesScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = window.innerWidth < 768;
    const leafCount = isMobile ? LEAF_COUNT_MOBILE : LEAF_COUNT_DESKTOP;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xfff6f0, 1.2);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xfff0d5, 1.6);
    dir.position.set(4, 6, 5);
    scene.add(dir);
    const warm = new THREE.DirectionalLight(0xb45309, 0.6);
    warm.position.set(-4, -2, 3);
    scene.add(warm);

    const leaves = createLeaves(leafCount);
    let instanced: THREE.InstancedMesh | null = null;
    let dummyMat: THREE.Material | null = null;

    const loader = new GLTFLoader();
    let disposed = false;
    let frame = 0;
    let visible = !document.hidden;

    const leafUrl = '/models/red-leaf.glb';

    const resize = () => {
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      const vW = (h * camera.aspect) ? w : w;
      // camera aspect based on full viewport
      camera.aspect = (w || window.innerWidth) / (h || window.innerHeight);
      camera.updateProjectionMatrix();
      renderer.setSize(w || window.innerWidth, h || window.innerHeight);
    };

    const animate = () => {
      if (!visible || disposed) return;
      const t = performance.now() / 1000;
      if (instanced) {
        const dummy = new THREE.Object3D();
        leaves.forEach((leaf, i) => {
          leaf.y -= leaf.speed * 0.016;
          if (leaf.y < -8) {
            leaf.y = 9 + Math.random() * 2;
            leaf.x = (Math.random() - 0.5) * 14;
          }
          const dx = Math.sin(t * leaf.driftFreq + leaf.offset) * leaf.drift;
          dummy.position.set(leaf.x + dx, leaf.y, leaf.z);
          dummy.rotation.set(
            t * leaf.rotSpeedX + leaf.offset,
            t * 0.35 + leaf.offset * 0.7,
            t * leaf.rotSpeedZ,
          );
          dummy.scale.setScalar(leaf.scale);
          dummy.updateMatrix();
          instanced!.setMatrixAt(i, dummy.matrix);
        });
        instanced.instanceMatrix.needsUpdate = true;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      visible = !document.hidden;
      if (visible) frame = requestAnimationFrame(animate);
      else cancelAnimationFrame(frame);
    };

    // Strict GLB-only — no plane/div fallback
    loader.load(
      leafUrl,
      (gltf) => {
        if (disposed) return;
        let srcMesh: THREE.Mesh | undefined;
        gltf.scene.traverse((obj) => {
          if ((obj as THREE.Mesh).isMesh && !srcMesh) srcMesh = obj as THREE.Mesh;
        });
        if (!srcMesh?.geometry) {
          console.error('[FallingLeaves] GLB has no mesh geometry');
          return;
        }
        const geometry = srcMesh.geometry.clone();
        geometry.computeVertexNormals();
        const material = new THREE.MeshStandardMaterial({
          color: 0xfaf4ee,
          roughness: 0.9,
          metalness: 0.0,
          transparent: true,
          alphaTest: 0.1,
          side: THREE.DoubleSide,
        });
        if (srcMesh.material) {
          const srcMat = srcMesh.material as THREE.MeshStandardMaterial;
          if (srcMat.map) {
            material.map = srcMat.map;
            material.map.colorSpace = THREE.SRGBColorSpace;
          }
          material.needsUpdate = true;
        }
        material.alphaMap = null;
        instanced = new THREE.InstancedMesh(geometry, material, leafCount);
        dummyMat = material;
        scene.add(instanced);
        setActive(true);
        resize();
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          frame = requestAnimationFrame(animate);
        } else {
          renderer.render(scene, camera);
        }
      },
      undefined,
      (err) => {
        console.error('[FallingLeaves] GLB load failed', err);
      },
    );

    // also try direct texture sprites immediately for fast paint
    // keep GLB as primary via loader above

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibility);
    resize();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (instanced) {
        instanced.geometry.dispose();
        (instanced.material as THREE.Material).dispose();
        scene.remove(instanced);
      }
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} aria-hidden="true" className={`pointer-events-none fixed inset-0 z-10 overflow-hidden ${active ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} style={{ height: '100vh', width: '100vw' }} />
  );
};
