import ButtonWhite from "../Buttons/ButtonWhite";
interface NavbarActionsProps {
  isLight?: boolean;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ isLight = false }) => (

  <ButtonWhite href="/contacto">Comenzar</ButtonWhite>

);

export default NavbarActions;
