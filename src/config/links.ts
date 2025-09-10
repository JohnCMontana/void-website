export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const links = {
  productos: [
    { label: "Aurall", href: "/productos/aurall" },
    { label: "Aurall Quantum", href: "/productos/quantum" },
    { label: "Aurall Quality", href: "/productos/quality" },
  ] as NavLink[],
  soluciones: [
    { label: "Industrias", href: "/soluciones" },
    { label: "Casos de uso", href: "/soluciones" },
  ] as NavLink[],
  recursos: [
    { label: "Blog", href: "/recursos/blog" },
    { label: "Casos de estudio", href: "/recursos/casos" },
    { label: "Documentación", href: "/documentacion" },
  ] as NavLink[],
  empresa: [
    { label: "Sobre nosotros", href: "/empresa" },
    { label: "Clientes", href: "/clientes" },
  ] as NavLink[],
  social: {
    linkedin: { label: "LinkedIn", href: "#", external: true } as NavLink,
    youtube: { label: "YouTube", href: "#", external: true } as NavLink,
  },
};


