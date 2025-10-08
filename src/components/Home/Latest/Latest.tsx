import ButtonWhite from '@/components/Buttons/ButtonWhite';
import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      date: "15 Sep 2025",
      title: "Álava Ingenieros presenta en Tecnosec las soluciones Aurall para organismos de seguridad",
      excerpt: "Este año, nuestro socio Álava Ingenieros presentará en Tecnosec la nueva generación de soluciones Aurall, orientadas a seguridad, emergencias 112, defensa y control de infraestructuras críticas.",
      category: "Empresa",
      slug: "/news/tecnosec-aurall-2025-alava-ingenieros",
      image: "/images/news/tecnosec-aurall-2025-alava-ingenieros.png"
    },
    {
      id: 2,
      date: "15 Sep 2025", 
      title: "Brechas de Datos en la Nube: Casos Reales y Lecciones para las Empresas",
      excerpt: "En los últimos años, grandes compañías tecnológicas han sufrido filtraciones que evidencian los riesgos de confiar datos sensibles a servicios cloud externos. Aquí resumimos los incidentes más relevantes entre 2022 y 2025 y las lecciones para las organizaciones.",
      category: "Seguridad",
      slug: "/news/brecha-de-datos-en-la-nube",
      image: "/images/news/brecha-de-datos-en-la-nube.png"
    },
    {
      id: 3,
      date: "25 Jun 2025",
      title: "Comunicaciones policiales más ágiles con IA",
      excerpt: "En seguridad ciudadana, la eficiencia en las comunicaciones es clave para las policías locales. Aurall Quantum integra inteligencia artificial para optimizar su operativa diaria, garantizando la custodia total de los datos en infraestructuras locales (on-premise).",
      category: "Seguridad", 
      slug: "/news/ia-optimizacion-comunicaciones-seguridad-publica",
      image: "/images/news/ia-optimizacion-comunicaciones-seguridad-publica.png"
    }
  ];

  const NewsCard = ({ news }: { news: { id: number; date: string; title: string; excerpt: string; category: string; slug: string; image: string } }) => (
    <article className="group relative backdrop-blur-xl p-6 shadow-md
                        transition-all duration-500 ease-out
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 cursor-pointer overflow-hidden rounded-lg">
      
      <div className="relative z-10">
        <div className="overflow-hidden rounded-lg mb-4">
          <img src={news.image} alt={news.title} 
               className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        <time className="text-sm font-medium text-black/60 uppercase tracking-wider mb-2 block">
          {news.date}
        </time>

        <h3 className="text-xl font-bold text-black mb-3 leading-tight">
          {news.title}
        </h3>

        <p className="text-black/80 leading-relaxed mb-5 text-sm">
          {news.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-xs font-semibold 
                          uppercase tracking-wide">
            {news.category}
          </span>

          <a href={news.slug} 
             className="text-red-500 hover:text-red-800 font-semibold text-sm flex items-center 
                       gap-2 group-hover:translate-x-1 transition-all duration-300">
            Leer más
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <section className="relative min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Lo Último
          </h2>
          <p className="text-black/80 text-md md:text-xl max-w-2xl mx-auto leading-relaxed">
            Mantente al día con las últimas noticias e innovaciones de nuestra empresa
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <ButtonWhite href="/noticias">
            Ver todas las noticias
          </ButtonWhite>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
