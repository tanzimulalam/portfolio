import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./HeroScene.css";

export default function HeroScene() {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const group = new THREE.Group();
    scene.add(group);

    // Subtle "particle field" using points (lightweight, looks premium)
    const count = 900;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color("#0E6BA8"); // blue
    const c2 = new THREE.Color("#BE95C4"); // purple
    const c3 = new THREE.Color("#07BEB8"); // teal

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 2.2 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.0;
      positions[i3 + 0] = Math.cos(theta) * r;
      positions[i3 + 1] = y;
      positions[i3 + 2] = (Math.random() - 0.5) * 2.6;

      const t = Math.random();
      const col = t < 0.33 ? c1 : t < 0.66 ? c2 : c3;
      colors[i3 + 0] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    group.add(points);

    // Soft vignette plane (adds depth; still transparent)
    const vignetteGeo = new THREE.PlaneGeometry(20, 10);
    const vignetteMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.08,
    });
    const vignette = new THREE.Mesh(vignetteGeo, vignetteMat);
    vignette.position.z = -1.5;
    scene.add(vignette);

    let width = 0;
    let height = 0;

    const resize = () => {
      if (!mount) return;
      const rect = mount.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    // Parallax with mouse
    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      mouse.x = (nx - 0.5) * 2;
      mouse.y = (ny - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.08 + mouse.x * 0.12;
      group.rotation.x = t * 0.04 - mouse.y * 0.08;
      points.rotation.z = t * 0.03;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      vignetteGeo.dispose();
      vignetteMat.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
