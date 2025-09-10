"use client";
import { useEffect, useState } from "react";
import { CursorHighlight } from "../Effects/CursorHighlight";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function easeOutQuad(t: number) {
  return t * (2 - t);
}

function Counter({ end, label, suffix = "+", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuad(progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <div className="text-center p-6 bg-black/30 border border-white/10 backdrop-blur-sm rounded-lg">
      <p className="text-2xl font-bold text-white">{count}{suffix}</p>
      <p className="text-xs font-light text-white/80">{label}</p>
    </div>
  );
}

const HeroCounters = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <CursorHighlight>
      <Counter end={30} label="Años de experiencia" duration={1500} />
    </CursorHighlight>
    <CursorHighlight>
      <Counter end={60} label="Proyectos completados" duration={2500} />
    </CursorHighlight>
    <CursorHighlight>
      <Counter end={100} label="Clientes satisfechos" duration={3000} suffix="%" />
    </CursorHighlight>
  </div>
);

export default HeroCounters;
