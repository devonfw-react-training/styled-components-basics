import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: 3.2rem;
  line-height: 1.1;
  cursor: default;
  color: dimgrey;

  :hover {
    color: dodgerblue;
  }
`;

interface StyledBouncingBoxI {
  boxColor: string;
}

export const StyledBouncingBox = styled.div<StyledBouncingBoxI>`
  height: 10rem;
  width: 10rem;
  padding: 1.5rem;
  margin: auto;
  background-color: ${(props) => props.boxColor};
  animation: bounce infinite 2.5s ease;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-130px);
    }
    40% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 992px) {
    height: 5rem;
    width: 5rem;
  }
`;

export const StyledMain = styled("main")((_props) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
}));
