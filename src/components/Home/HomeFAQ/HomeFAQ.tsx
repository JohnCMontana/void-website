"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import ButtonWhite from "../../Buttons/ButtonWhite";

const faqs = [
	{
		q: "¿Qué es Aurall y qué componentes incluye?",
		a: "Aurall es una plataforma integral para capturar, gestionar, analizar y buscar comunicaciones de voz (y otros canales). Incluye Aurall Quantum (IA para transcripción, búsqueda, resúmenes y alertas) y Aurall Quality (KPI, reglas de evaluación, dashboards y exportación a BI).",
	},
	{
		q: "¿Qué problema resuelve Aurall?",
		a: "Convierte grandes volúmenes de conversaciones en información utilizable para operación y cumplimiento. Acelera auditorías, habilita alertas proactivas y mejora continua.",
	},
	{
		q: "¿En qué se diferencia Aurall de un grabador tradicional?",
		a: "Aurall no solo graba, también estructura y comprende el contenido. Ofrece búsqueda en audio, resúmenes automáticos, clasificación, extracción de datos, alertas y dashboards.",
	},
	{
		q: "¿Cómo ayuda Aurall a trabajar en entornos desconectados?",
		a: "En modo on-premise aislado, todo el procesamiento y almacenamiento se queda dentro de la infraestructura del cliente, con permisos granulares y políticas internas sin exposición a Internet.",
	},
];

export default function FAQ() {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section className="flex items-center justify-center py-20 px-4">
			<div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
				<h2 className="flex items-center gap-2 text-3xl font-extrabold mb-8 text-gray-900">
					Preguntas Frecuentes
				</h2>

				<div className="space-y-4">
					{faqs.map((faq, idx) => {
						const isOpen = open === idx;
						return (
							<div
								key={idx}
								className="border-b border-gray-200 pb-4 last:border-none"
							>
								<button
									onClick={() => setOpen(isOpen ? null : idx)}
									className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:text-[#d73032] transition"
								>
									<span>{faq.q}</span>
									<span className="ml-2 text-[#d73032]">
										{isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
									</span>
								</button>

								<div
									className={`overflow-hidden transition-all duration-300 ease-in-out ${
										isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
									}`}
								>
									<p className="text-gray-600 text-sm leading-relaxed">
										{faq.a}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				{/* Button to FAQ page */}
				<div className="flex justify-center mt-10">
					<ButtonWhite href="/faq">
						Ver todas las preguntas frecuentes
					</ButtonWhite>
				</div>
			</div>
		</section>
	);
}
