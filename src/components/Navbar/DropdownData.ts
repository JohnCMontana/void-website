export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

export interface DropdownData {
  [key: string]: DropdownItem[];
}

export const dropdownData: DropdownData = {
  productos: [
    { name: "Aurall", href: "/productos/aurall", description: "Plataforma principal" },
    { name: "Aurall Quantum", href: "/productos/aurall-quantum", description: "Función de IA" },
    { name: "Aurall Quality", href: "/productos/aurall-quality", description: "Producto independiente" },
  ],
  soluciones: [
    { name: "Manufactura", href: "/soluciones/manufactura" },
    { name: "Salud", href: "/soluciones/salud" },
    { name: "Finanzas", href: "/soluciones/finanzas" },
    { name: "Retail", href: "/soluciones/retail" },
  ],
  recursos: [
    { name: "Blog", href: "/recursos/blog" },
    { name: "Casos de estudio", href: "/recursos/casos-estudio" },
    { name: "Documentación", href: "/recursos/documentacion" },
  ],
  empresa: [
    { name: "Acerca de nosotros", href: "/empresa/acerca" },
    { name: "Equipo", href: "/empresa/equipo" },
    { name: "Carreras", href: "/empresa/carreras" },
    { name: "Contacto", href: "/empresa/contacto" },
  ],
};