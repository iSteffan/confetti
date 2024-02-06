import { Btn, MenuIcon } from './MenuBtn.styled';

export const MenuBtn = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      MENU
      <MenuIcon />
    </Btn>
  );
};
