'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const LoadingScreen = ({ onDone }: { onDone?: () => void }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // reduced motion: quick fake
      setProgress(100);
      const t = setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 400);
      return () => clearTimeout(t);
    }

    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.15, 2.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xfff6f0, 1.1);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xfff0d5, 1.4);
    dir.position.set(2, 4, 3);
    scene.add(dir);
    const fill = new THREE.DirectionalLight(0xb45309, 0.5);
    fill.position.set(-2, -1, 2);
    scene.add(fill);

    let leaf: THREE.Object3D | null = null;
    let frame = 0;
    let disposed = false;
    const start = performance.now();
    const minDuration = 900;

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();

    const tick = () => {
      if (disposed || !leaf) return;
      leaf.rotation.y += 0.012;
      leaf.rotation.x += 0.006;
      leaf.rotation.z += 0.004;
      const t = (Math.sin(performance.now() / 700) * 0.04);
      leaf.position.y = t;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };

    let timeoutDone = false;
    let loadDone = false;
    const tryDone = () => {
      if (loadDone && timeoutDone) {
        // ensure at least minDuration
        const elapsed = performance.now() - start;
        const wait = Math.max(0, minDuration - elapsed);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => onDone?.(), 700);
        }, wait);
      }
    };

    setTimeout(() => {
      timeoutDone = true;
      tryDone();
    }, minDuration + 200);

    const loader = new GLTFLoader();
    loader.load(
      '/models/red-leaf.glb',
      (gltf) => {
        if (disposed) return;
        // find first mesh
        const srcObj = { current: null as THREE.Object3D | null };
        gltf.scene.traverse((o) => {
          if ((o as THREE.Mesh).isMesh && !srcObj.current) srcObj.current = o;
        });
        // clone scene as single object
        const wrapper = new THREE.Group();
        const cloned = gltf.scene.clone(true);
        // ensure leaf material has alpha for loader preview
        cloned.traverse((o) => {
          const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (m) {
            const mat = m as THREE.MeshStandardMaterial;
            mat.transparent = true;
            mat.alphaTest = 0.1;
            mat.side = THREE.DoubleSide;
            if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
          }
        });
        // normalize scale
        const box = new THREE.Box3().setFromObject(cloned);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = maxDim > 0 ? 0.85 / maxDim : 1;
        cloned.scale.setScalar(scale);
        box.setFromObject(cloned);
        const center = box.getCenter(new THREE.Vector3());
        cloned.position.sub(center);
        wrapper.add(cloned);
        leaf = wrapper;
        scene.add(wrapper);
        setProgress(100);
        loadDone = true;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
        tryDone();
        window.addEventListener('resize', resize);
      },
      (ev) => {
        if (ev.lengthComputable && ev.total > 0) {
          const p = Math.round((ev.loaded / ev.total) * 100);
          setProgress(Math.min(100, p));
        } else {
          // indeterminate: animate 0-92
          setProgress((prev) => Math.min(92, prev + Math.random() * 8 + 2));
        }
      },
      () => {
        // on error: fallback progress
        setProgress(100);
        loadDone = true;
        tryDone();
      },
    );

    // fake progress while waiting if no lengthComputable
    const progInt = setInterval(() => {
      setProgress((p) => (p >= 92 ? p : Math.min(92, p + Math.random() * 6)));
    }, 180);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      clearInterval(progInt);
      window.removeEventListener('resize', resize);
      scene.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          const mat = mesh.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [onDone]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f7ede0] px-6"
        >
          <div className="flex flex-col items-center gap-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#8d6b4f]">Preparing</p>

            <div ref={mountRef} className="h-[140px] w-[140px] md:h-[160px] md:w-[160px]" aria-hidden="true" />

            <div className="flex flex-col items-center gap-3">
              <h1 className="text-center text-[1.7rem] font-semibold tracking-[-0.02em] text-[#3e1a0a]">Siddharth Kumar Rai</h1>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#8d6b4f]">{progress}%</p>
              <div className="mt-1 h-[2px] w-[180px] overflow-hidden rounded-full bg-[rgba(62,26,10,0.08)] md:w-[200px]">
                <motion.div
                  className="h-full bg-[#b45309]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
