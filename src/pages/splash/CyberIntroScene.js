import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CyberIntroScene() {
  const mountRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    const root = new THREE.Group();
    scene.add(root);

    const globe = new THREE.Group();
    root.add(globe);

    const globeRadius = 2.25;
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius, 40, 40),
      new THREE.MeshBasicMaterial({
        color: 0x5ac8fa,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      })
    );
    globe.add(wire);

    const pointsCount = 700;
    const pointPositions = new Float32Array(pointsCount * 3);
    const cA = new THREE.Color("#53f2ff");
    const cB = new THREE.Color("#6fb1ff");
    const cC = new THREE.Color("#8bfad8");
    const pointColors = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i += 1) {
      const i3 = i * 3;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = globeRadius + (Math.random() - 0.5) * 0.12;

      pointPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
      pointPositions[i3 + 1] = r * Math.cos(phi);
      pointPositions[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      const t = Math.random();
      const color = t < 0.33 ? cA : t < 0.66 ? cB : cC;
      pointColors[i3] = color.r;
      pointColors[i3 + 1] = color.g;
      pointColors[i3 + 2] = color.b;
    }

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3)
    );
    pointGeo.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));
    const pointMat = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const globePoints = new THREE.Points(pointGeo, pointMat);
    globe.add(globePoints);

    const arcCount = 7;
    const arcMaterials = [];
    for (let i = 0; i < arcCount; i += 1) {
      const start = randomPointOnSphere(globeRadius);
      const end = randomPointOnSphere(globeRadius);
      const mid = start
        .clone()
        .add(end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(3.2);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(42);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0x6ed6ff,
        transparent: true,
        opacity: 0.16 + Math.random() * 0.24,
      });
      const line = new THREE.Line(geo, mat);
      line.userData = {
        phase: Math.random() * Math.PI * 2,
        speed: 0.8 + Math.random() * 0.9,
      };
      globe.add(line);
      arcMaterials.push(mat);
    }

    const pulseCount = 18;
    const pulseGeo = new THREE.SphereGeometry(0.03, 10, 10);
    const pulses = [];
    for (let i = 0; i < pulseCount; i += 1) {
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 ? 0xff647a : 0x4cd7ff,
        transparent: true,
        opacity: 0.7,
      });
      const mesh = new THREE.Mesh(pulseGeo, mat);
      mesh.position.copy(randomPointOnSphere(globeRadius + 0.02));
      mesh.userData = {
        phase: Math.random() * Math.PI * 2,
        speed: 1.8 + Math.random() * 1.6,
        jitter: 0.012 + Math.random() * 0.016,
      };
      globe.add(mesh);
      pulses.push(mesh);
    }

    const haze = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 10),
      new THREE.MeshBasicMaterial({
        color: 0x09111c,
        transparent: true,
        opacity: 0.3,
      })
    );
    haze.position.z = -1;
    scene.add(haze);

    let width = 1;
    let height = 1;
    const resize = () => {
      const rect = mount.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();

    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });

    const clock = new THREE.Clock();
    const tick = () => {
      const t = clock.getElapsedTime();
      globe.rotation.y = t * 0.2 + mouse.x * 0.08;
      globe.rotation.x = Math.sin(t * 0.27) * 0.08 - mouse.y * 0.06;
      root.rotation.z = Math.sin(t * 0.16) * 0.03;

      globe.children.forEach((child) => {
        if (child.isLine && child.material) {
          const phase = child.userData.phase + t * child.userData.speed;
          child.material.opacity = 0.1 + (Math.sin(phase) * 0.5 + 0.5) * 0.3;
        }
      });

      pulses.forEach((pulse) => {
        const wave =
          Math.sin(t * pulse.userData.speed + pulse.userData.phase) * 0.5 + 0.5;
        const scale = 0.75 + wave * 1.45;
        pulse.scale.set(scale, scale, scale);
        pulse.material.opacity = 0.2 + wave * 0.78;
        const pos = pulse.position
          .clone()
          .normalize()
          .multiplyScalar(
            globeRadius +
              pulse.userData.jitter * Math.sin(t * 3 + pulse.userData.phase)
          );
        pulse.position.copy(pos);
      });

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      pointGeo.dispose();
      pointMat.dispose();
      pulseGeo.dispose();
      arcMaterials.forEach((m) => m.dispose());
      wire.geometry.dispose();
      wire.material.dispose();
      haze.geometry.dispose();
      haze.material.dispose();
      pulses.forEach((p) => p.material.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="intro-cyber-scene" ref={mountRef} aria-hidden="true" />
  );
}

function randomPointOnSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}
