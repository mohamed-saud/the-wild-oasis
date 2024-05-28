import styled from "styled-components";
import Button from "../ui/Button";

import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 4.8rem;
  background-image: url("/404.svg");
  background-size: cover;
`;

const Box = styled.div`
  /* box */
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Button type="primary" onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
