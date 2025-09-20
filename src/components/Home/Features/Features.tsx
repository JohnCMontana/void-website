"use client";

import { FiMic, FiCpu, FiBarChart2, FiLock } from "react-icons/fi";

const features = [
	{
		title: "Grabación Inteligente",
		description:
			"Captura y almacena comunicaciones críticas con máxima seguridad y flexibilidad.",
		icon: <FiMic size={32} className="text-[#d73032]" />,
	},
	{
		title: "Análisis con IA",
		description:
			"Transcribe, resume y detecta patrones en tiempo real para decisiones ágiles.",
		icon: <FiCpu size={32} className="text-[#d73032]" />,
	},
	{
		title: "Dashboards & KPIs",
		description:
			"Visualiza métricas clave y exporta datos a BI para mejorar la operación.",
		icon: <FiBarChart2 size={32} className="text-[#d73032]" />,
	},
	{
		title: "Privacidad & Control",
		description:
			"Procesamiento local, permisos granulares y cumplimiento normativo garantizado.",
		icon: <FiLock size={32} className="text-[#d73032]" />,
	},
];

const Features = () => (
	<section className="py-12 md:py-16 mb-8 md:mb-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
		<div className="max-w-7xl mx-auto px-4 md:px-8">
			<h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center">
				Todo en uno
      </h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
				{features.map((f, i) => (
					<div
						key={i}
						className="relative group border-l-4 border-[#d73032] border-t border-r border-b border-gray-200 bg-white flex flex-col items-start px-8 py-12 min-h-[240px] shadow-lg rounded-none overflow-hidden transition-all duration-300"
					>
						{/* Animated gradient bar on hover */}
						<span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#d73032] via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
						{/* Glassmorphism accent on icon */}
						<span className="mb-6 z-10 bg-white/60 backdrop-blur-md border border-[#d73032]/30 shadow-lg flex items-center justify-center p-4">
							{f.icon}
						</span>
						<h3 className="text-xl font-semibold text-gray-900 mb-2 z-10 group-hover:text-[#d73032] transition-colors">
							{f.title}
						</h3>
						<p className="text-gray-600 text-base leading-relaxed z-10">
							{f.description}
						</p>
						{/* Glow effect on hover */}
						<span className="absolute inset-0 pointer-events-none group-hover:shadow-[0_0_32px_0_rgba(215,48,50,0.15)] transition-all duration-500"></span>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Features;
