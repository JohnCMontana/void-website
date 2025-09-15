"use client";
import React from "react";
import { CursorHighlight } from "../Effects/CursorHighlight";

interface Card2Props {
  title: string;
  description: string;
}

export const Card2 = ({ title, description }: Card2Props) => {
  return (
    <CursorHighlight color="rgba(255,255,255,0.2)" radius={80}>
      <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="bg-primary/20 p-4 rounded-full mb-4"></div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </CursorHighlight>
  );
};

export default Card2;
