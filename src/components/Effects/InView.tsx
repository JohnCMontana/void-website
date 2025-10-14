"use client";
import React from "react";
import { motion } from "framer-motion";

type Variant = "fadeUp" | "fadeIn" | "zoomIn" | "slideLeft" | "slideRight";

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // seconds
  duration?: number; // seconds
  y?: number; // px offset for vertical variants
  x?: number; // px offset for horizontal variants
  variant?: Variant;
}

const getInitial = (variant: Variant, { x, y }: { x: number; y: number }) => {
  switch (variant) {
    case "fadeUp":
      return { opacity: 0, y };
    case "fadeIn":
      return { opacity: 0 };
    case "zoomIn":
      return { opacity: 0, scale: 0.96 };
    case "slideLeft":
      return { opacity: 0, x };
    case "slideRight":
      return { opacity: 0, x: -x };
    default:
      return { opacity: 0, y };
  }
};

const getAnimate = (variant: Variant) => {
  switch (variant) {
    case "fadeUp":
    case "fadeIn":
      return { opacity: 1, y: 0 };
    case "zoomIn":
      return { opacity: 1, scale: 1 };
    case "slideLeft":
    case "slideRight":
      return { opacity: 1, x: 0 };
    default:
      return { opacity: 1, y: 0 };
  }
};

export const InView: React.FC<InViewProps> = ({
  children,
  className,
  style,
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 24,
  variant = "fadeUp",
}) => {
  return (
    <motion.div
      initial={getInitial(variant, { x, y })}
      whileInView={getAnimate(variant)}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default InView;