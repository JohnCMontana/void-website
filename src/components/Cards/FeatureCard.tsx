"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  bgImage: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, bgImage, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transform ${className}`}
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
        transform: isHovered ? "rotateX(10deg) scale(1.05)" : "rotateX(0deg) scale(1)",
        boxShadow: isHovered
          ? "0 0 25px rgba(0, 0, 0, 0.8)"
          : "0 0 10px rgba(0,0,0,0.2)",
        transition:
          "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Red tint overlay */}
      <div
        className="absolute inset-0 transition-all duration-500 pointer-events-none"
        style={{
          backgroundColor: isHovered ? "rgba(215,48,50,0.25)" : "transparent",
        }}
      />

      {/* Bottom black overlay for text */}
      <div className="absolute bottom-0 w-full bg-black/60 px-20 py-8 flex flex-col justify-end">
        <h3
          className={`text-3xl font-bold text-white transition-colors duration-500 ${
            isHovered ? "text-red-500" : ""
          }`}
          style={{ textShadow: "0 2px 6px rgba(0,0,0,0.7)" }}
        >
          {title}
        </h3>
        <p className="text-white/90 mt-1" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
