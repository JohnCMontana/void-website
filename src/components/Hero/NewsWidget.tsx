"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NewsWidgetProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
}

const NewsWidget = ({ title, imageUrl, linkUrl }: NewsWidgetProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <div 
        className={`relative mb-20 w-[400px] h-[200px] overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-all duration-900 ease-in-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
      >
        <Image
          src="/images/news/policia-local-grabaciones-ia.png"
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 p-7 flex flex-col justify-between z-20">
          <span className="text-xs text-white">Última Novedad</span>
          <div>
            <h3 className="text-white text-sm font-medium mb-3">{title}</h3>
            <Link 
              href={linkUrl}
              className="inline-block text-xs text-white py-2 hover:underline"
            >
              Leer más →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;