import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHomeModern,
  HiHome,
  HiCalendarDays,
  HiUsers,
  HiCog6Tooth,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome />
            <span>Home</span>
          </StyledNavLink>
          <StyledNavLink to="/bookings">
            <HiCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
          <StyledNavLink to="/cabins">
            <HiHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
          <StyledNavLink to="/users">
            <HiUsers />
            <span>Users</span>
          </StyledNavLink>
          <StyledNavLink to="/setting">
            <HiCog6Tooth />
            <span>Setting</span>
          </StyledNavLink>
          {/* <StyledNavLink to="/account">Account </StyledNavLink>
          <StyledNavLink to="/login">Login </StyledNavLink> */}
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
