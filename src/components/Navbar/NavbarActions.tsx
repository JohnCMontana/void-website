import ButtonWhite from "../Buttons/ButtonWhite";

interface NavbarActionsProps {
  isLight?: boolean;
  isAtTop?: boolean;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ isLight = false, isAtTop = false }) => (
  <ButtonWhite href="/contacto" inverted={isAtTop}>
    Comenzar
  </ButtonWhite>
);

export default NavbarActions;
