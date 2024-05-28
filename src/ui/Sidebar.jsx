import styled from "styled-components";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 2rem;
  grid-row: 1/-1;
  border-right: 1px solid var(--color-grey-100);
  gap: 3.2rem;
  flex-direction: column;
  display: flex;
`;
function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default SideBar;
