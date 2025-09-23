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

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-24 h-24 bg-red-500/10 rounded-full top-[25%] left-[8%] animate-pulse" style={{ animationDelay: '0ms' }}></div>
      <div className="absolute w-32 h-32 bg-red-500/15 rounded-full top-[60%] right-[20%] animate-pulse" style={{ animationDelay: '700ms' }}></div>
      <div className="absolute w-20 h-20 bg-red-500/10 rounded-full bottom-[33%] left-[66%] animate-pulse" style={{ animationDelay: '1000ms' }}></div>
    </div>
  );

  const NewsCard = ({ news }: { news: { id: number; date: string; title: string; excerpt: string; category: string; slug: string; } }) => (
    <article className="group relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 
                        transition-all duration-500 ease-out hover:bg-gray-900/90 hover:border-gray-600/70 
                        hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform 
                      duration-700 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      
      <div className="relative z-10">
        <time className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4 block">
          {news.date}
        </time>
        
        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-red-500 
                       transition-colors duration-300">
          {news.title}
        </h3>
        
        <p className="text-white/80 leading-relaxed mb-6 text-sm">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-xs font-semibold 
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
    <section className="relative min-h-screen bg-gray-950 py-20 px-4">
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white to-white/80 
                         bg-clip-text text-transparent mb-6 tracking-tight">
            Lo Último
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
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
          <a href="/news" 
             className="inline-flex items-center gap-3 bg-red-600/20 hover:bg-red-500/30 backdrop-blur-xl 
                       border border-red-500/30 hover:border-red-400 rounded-full px-8 py-4 text-white 
                       font-semibold transition-all duration-300 hover:scale-105">
            Ver todas las noticias
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
