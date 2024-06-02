import { createContext, useContext, useRef, useState } from "react";
import styled from "styled-components";
import { useOutSide } from "../hooks/useOutSide";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  z-index: 99;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const menusContext = createContext();

function Menus({ children }) {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  const open = setIsOpen;
  return (
    <menusContext.Provider value={{ close, open, isOpen }}>
      <StyledMenu>{children}</StyledMenu>
    </menusContext.Provider>
  );
}
function Toggle({ children, menuId }) {
  const { open, close } = useContext(menusContext);

  function handelClick(e) {
    close();
    open(menuId);
    // const { x, y } = e.target.closest("button").getBoundingClientRect();
    // setPosition({ x, y });
  }

  return <StyledToggle onClick={handelClick}>{children}</StyledToggle>;
}
function Menu({ children }) {
  return children;
}

function List({ children, listId }) {
  const { close } = useContext(menusContext);

  const [ref] = useOutSide(close, true);

  const { isOpen } = useContext(menusContext);
  if (listId !== isOpen) return;
  return (
    <StyledList ref={ref} position={{ x: 20, y: 20 }}>
      {children}
    </StyledList>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(menusContext);

  function handelClick() {
    close();
    onClick();
  }
  return (
    <StyledButton onClick={handelClick}>
      {icon}
      {children}
    </StyledButton>
  );
}
Menus.Toggle = Toggle;
Menus.Button = Button;
Menus.List = List;
Menus.Menu = Menu;
export default Menus;
