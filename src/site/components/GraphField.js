import React, { useEffect, useRef } from "react";

/**
 * GraphField: the hero backdrop.
 *
 * A slowly drifting node/edge constellation with signal pulses that travel
 * along the edges. It is a visual nod to the STIX 2.1 knowledge graphs behind
 * the CTI work, not a literal rendering of one.
 *
 * Everything is drawn to a single canvas: no DOM churn, one rAF loop, and the
 * loop parks itself when the tab is hidden or the element scrolls off screen.
 * Under `prefers-reduced-motion` it paints one static frame and stops.
 */
export default function GraphField({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes = [];
    let edges = [];
    let pulses = [];
    let raf = null;
    let visible = true;
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, active: false };

    const NODE_COLOR = "rgba(94, 243, 196, ";
    const EDGE_COLOR = "rgba(150, 196, 210, ";

    function seed() {
      // Node count scales with area but stays bounded on both ends.
      const target = Math.round(
        Math.min(78, Math.max(26, (width * height) / 19000))
      );
      nodes = [];
      for (let i = 0; i < target; i += 1) {
        // Bias nodes toward the right half: the left is where the type lives.
        const bias = Math.random() ** 0.7;
        nodes.push({
          x: (0.16 + bias * 0.92) * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.13,
          vy: (Math.random() - 0.5) * 0.13,
          r: Math.random() < 0.14 ? 2.6 : 1.35,
          // A few nodes read as "hubs" and get the accent treatment.
          hub: Math.random() < 0.14,
          phase: Math.random() * Math.PI * 2,
          depth: 0.35 + Math.random() * 0.65,
        });
      }
      pulses = [];
    }

    function link() {
      // Recompute proximity edges each frame-batch; O(n^2) is fine at n<80.
      edges = [];
      const maxDist = Math.min(190, Math.max(110, width * 0.13));
      const maxDistSq = maxDist * maxDist;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dsq = dx * dx + dy * dy;
          if (dsq < maxDistSq) {
            edges.push({ a: i, b: j, k: 1 - Math.sqrt(dsq) / maxDist });
          }
        }
      }
    }

    /**
     * Size the backing store to the element's layout box.
     *
     * Returns false when the element has no layout yet, which happens when the
     * document loads in a background tab. Seeding against a zero-width box would
     * bake in a 1px canvas that never recovers, so we bail and re-measure later
     * (on visibility change or the next resize).
     */
    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 2 || h < 2) return false;

      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      if (w === width && h === height && nextDpr === dpr) return true;

      dpr = nextDpr;
      width = w;
      height = h;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      link();
      return true;
    }

    function spawnPulse() {
      if (!edges.length || pulses.length > 5) return;
      const e = edges[(Math.random() * edges.length) | 0];
      pulses.push({
        a: e.a,
        b: e.b,
        t: 0,
        speed: 0.006 + Math.random() * 0.009,
      });
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      // Pointer parallax, eased. Small on purpose, since this is a backdrop.
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;
      const shiftX = (pointer.x - 0.5) * 26;
      const shiftY = (pointer.y - 0.5) * 18;

      // --- edges ---
      ctx.lineWidth = 1;
      for (let i = 0; i < edges.length; i += 1) {
        const e = edges[i];
        const a = nodes[e.a];
        const b = nodes[e.b];
        const alpha = e.k * 0.16;
        if (alpha < 0.012) continue;
        ctx.strokeStyle = EDGE_COLOR + alpha.toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(a.x + shiftX * a.depth, a.y + shiftY * a.depth);
        ctx.lineTo(b.x + shiftX * b.depth, b.y + shiftY * b.depth);
        ctx.stroke();
      }

      // --- pulses travelling along edges ---
      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) {
          pulses.splice(i, 1);
          continue;
        }
        const ax = a.x + shiftX * a.depth;
        const ay = a.y + shiftY * a.depth;
        const bx = b.x + shiftX * b.depth;
        const by = b.y + shiftY * b.depth;
        const px = ax + (bx - ax) * p.t;
        const py = ay + (by - ay) * p.t;
        // Fade in and out across the traversal.
        const fade = Math.sin(p.t * Math.PI);
        ctx.fillStyle = NODE_COLOR + (fade * 0.85).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(px, py, 1.9, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- nodes ---
      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        const x = n.x + shiftX * n.depth;
        const y = n.y + shiftY * n.depth;
        const breathe = reduced
          ? 1
          : 0.72 + Math.sin(time * 0.0014 + n.phase) * 0.28;

        if (n.hub) {
          ctx.fillStyle = NODE_COLOR + (0.5 * breathe).toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(x, y, n.r, 0, Math.PI * 2);
          ctx.fill();
          // halo
          ctx.strokeStyle = NODE_COLOR + (0.14 * breathe).toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, n.r + 5.5, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle =
            EDGE_COLOR + (0.3 * breathe * n.depth).toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(x, y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let lastLink = 0;
    let lastSpawn = 0;

    function frame(time) {
      if (!visible) {
        raf = null;
        return;
      }

      // Still unmeasured (mounted while hidden): idle until layout exists.
      if (width < 2 && !resize()) {
        raf = window.requestAnimationFrame(frame);
        return;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        // Wrap with a margin so nodes reappear smoothly.
        if (n.x < -40) n.x = width + 40;
        if (n.x > width + 40) n.x = -40;
        if (n.y < -40) n.y = height + 40;
        if (n.y > height + 40) n.y = -40;
      }

      // Relinking is the expensive part; 8fps is plenty for slow drift.
      if (time - lastLink > 125) {
        link();
        lastLink = time;
      }
      if (time - lastSpawn > 900) {
        spawnPulse();
        lastSpawn = time;
      }

      draw(time);
      raf = window.requestAnimationFrame(frame);
    }

    function start() {
      if (raf === null && visible && !reduced) {
        raf = window.requestAnimationFrame(frame);
      }
    }

    function stop() {
      if (raf !== null) {
        window.cancelAnimationFrame(raf);
        raf = null;
      }
    }

    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / rect.width;
      pointer.ty = (event.clientY - rect.top) / rect.height;
    }

    function onVisibility() {
      visible = !document.hidden;
      if (visible) {
        // A load in a background tab leaves the canvas unmeasured; catch up now.
        if (resize() && reduced) draw(0);
        start();
      } else {
        stop();
      }
    }

    const measured = resize();

    if (reduced) {
      // One static frame, then leave it alone.
      if (measured) draw(0);
    } else {
      start();
    }

    let ro = null;
    if (typeof window.ResizeObserver === "function") {
      ro = new window.ResizeObserver(() => {
        if (resize() && reduced) draw(0);
      });
      ro.observe(canvas);
    } else {
      window.addEventListener("resize", resize);
    }

    // Park the loop once the hero is scrolled well out of view.
    let io = null;
    if (typeof window.IntersectionObserver === "function") {
      io = new window.IntersectionObserver(
        (entries) => {
          const onScreen = entries.some((e) => e.isIntersecting);
          visible = onScreen && !document.hidden;
          if (visible) start();
          else stop();
        },
        { rootMargin: "120px" }
      );
      io.observe(canvas);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", resize);
      if (io) io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
