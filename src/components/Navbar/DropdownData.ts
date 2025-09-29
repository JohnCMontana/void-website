export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  imageSrc?: string;
}

export interface DropdownData {
  [key: string]: DropdownItem[];
}

export const dropdownData: DropdownData = {
  productos: [
    { name: "Aurall Server", href: "/productos/aurall-server", description: "Plataforma principal", imageSrc: "/images/products/aurall-server-recording.png" },
    { name: "Aurall Quantum", href: "/productos/aurall-quantum", description: "Función de IA", imageSrc: "/images/products/aurall-solutions.png" },
    { name: "Aurall Quality", href: "/productos/aurall-quality", description: "Producto independiente", imageSrc: "/images/certifications/voidsistemas-certificados.png" },
  ],
  soluciones: [
    { name: "Manufactura", href: "/soluciones/manufactura", description: "Optimización de procesos industriales", imageSrc: "/images/products/aurall-server-recording.png" },
    { name: "Salud", href: "/soluciones/salud", description: "Tecnología para el sector sanitario", imageSrc: "/images/products/aurall-solutions.png" },
    { name: "Finanzas", href: "/soluciones/finanzas", description: "Soluciones para servicios financieros", imageSrc: "/images/certifications/voidsistemas-certificados.png" },
    { name: "Retail", href: "/soluciones/retail", description: "Innovación para comercio minorista", imageSrc: "/images/about-us/about-us-void-sistemas.png" },
  ],
  recursos: [
    { name: "Blog", href: "/recursos/blog", description: "Artículos y noticias del sector", imageSrc: "/images/products/aurall-server-recording.png" },
    { name: "Casos de estudio", href: "/recursos/casos-estudio", description: "Historias de éxito de clientes", imageSrc: "/images/products/aurall-solutions.png" },
    { name: "Documentación", href: "/recursos/documentacion", description: "Guías técnicas y manuales", imageSrc: "/images/certifications/voidsistemas-certificados.png" },
  ],
  empresa: [
    { name: "Acerca de nosotros", href: "/empresa/acerca", description: "Nuestra historia y misión", imageSrc: "/images/about-us/about-us-void-sistemas.png" },
    { name: "Equipo", href: "/empresa/equipo", description: "Conoce a nuestro equipo", imageSrc: "/images/products/aurall-server-recording.png" },
    { name: "Carreras", href: "/empresa/carreras", description: "Únete a nuestro equipo", imageSrc: "/images/products/aurall-solutions.png" },
    { name: "Contacto", href: "/empresa/contacto", description: "Ponte en contacto con nosotros", imageSrc: "/images/certifications/voidsistemas-certificados.png" },
  ],
};