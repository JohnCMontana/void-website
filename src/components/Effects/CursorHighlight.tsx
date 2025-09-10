"use client";
import { useEffect, useState, ReactNode, useRef } from "react";

interface CursorHighlightProps {
  children: ReactNode;
  color?: string;      // glow color
  radius?: number;     // gradient radius in %
}

export const CursorHighlight = ({
  children,
  color = "rgba(255,255,255,0.2)",
  radius = 80,
}: CursorHighlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-lg">
      {/* Glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg z-0"
        style={{
          background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, ${color} 0%, transparent ${radius}%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
