import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Main = styled.main`
  padding: 2rem;
  background-color: var(--color-grey-50);
  overflow: scroll;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Contanier = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 0 auto;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Contanier>
          <Outlet />
        </Contanier>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
