interface NavbarActionsProps { 
  isLight?: boolean 
}

const NavbarActions: React.FC<NavbarActionsProps> = () => (
  <a
    href="/contacto"
    className="font-medium text-black h-8 hover:underline"
  >
    Comenzar
  </a>
);

export default NavbarActions;
