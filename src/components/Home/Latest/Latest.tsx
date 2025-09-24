import ButtonWhite from '@/components/Buttons/ButtonWhite';
import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      date: "23 Sep 2024",
      title: "Lanzamos Nueva Plataforma de Inteligencia Artificial",
      excerpt: "Revolucionamos el mercado con nuestra nueva plataforma de IA que permite a las empresas automatizar procesos complejos con una precisión sin precedentes.",
      category: "Producto",
      slug: "/news/nueva-plataforma-ia"
    },
    {
      id: 2,
      date: "20 Sep 2024", 
      title: "Expansión Internacional: Apertura en 5 Nuevos Países",
      excerpt: "Anunciamos nuestra expansión a mercados internacionales clave en Europa y Asia, consolidando nuestra presencia global y acercándonos más a nuestros clientes.",
      category: "Empresa",
      slug: "/news/expansion-internacional"
    },
    {
      id: 3,
      date: "18 Sep 2024",
      title: "Premio a la Innovación Tecnológica 2024",
      excerpt: "Recibimos el prestigioso premio a la innovación tecnológica por nuestro compromiso con el desarrollo sostenible y las soluciones disruptivas del sector.",
      category: "Reconocimiento", 
      slug: "/news/premio-innovacion-2024"
    }
  ];

  const NewsCard = ({ news }: { news: { id: number; date: string; title: string; excerpt: string; category: string; slug: string; } }) => (
    <article className="group relative backdrop-blur-xl p-8 shadow-md
                        transition-all duration-500 ease-out
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform 
                      duration-700 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      
      <div className="relative z-10">
        <time className="text-sm font-medium text-black/60 uppercase tracking-wider mb-4 block">
          {news.date}
        </time>
        
        <h3 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-red-500 
                       transition-colors duration-300">
          {news.title}
        </h3>
        
        <p className="text-black/80 leading-relaxed mb-6 text-sm">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-xs font-semibold 
                          uppercase tracking-wide">
            {news.category}
          </span>
          
          <a href={news.slug} 
             className="text-red-500 hover:text-white font-semibold text-sm flex items-center 
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
    <section className="relative min-h-screen bg-white py-20 px-4">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black from-black
                        mb-6 tracking-tight">
            Lo Último
          </h2>
          <p className="text-black/80 text-md md:text-xl max-w-2xl mx-auto leading-relaxed">
            Mantente al día con las últimas noticias e innovaciones de nuestra empresa
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">

          <ButtonWhite href="/news">Ver todas las noticias</ButtonWhite>

        </div>
      </div>
    </section>
  );
};

export default LatestNews;
