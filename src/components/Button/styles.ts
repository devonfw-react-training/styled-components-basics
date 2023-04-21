import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  box-sizing: border-box;
  background-color: dodgerblue;
  color: white;
  border: 1px solid dodgerblue;
  border-radius: 0.75rem;
  box-shadow: deepskyblue 0.1rem 0.2rem 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.3rem;
  padding: 0.5rem 1rem;
  transition: 0.2s ease-in-out;
  white-space: nowrap;

  :hover {
    background-color: snow;
    color: dodgerblue;
    box-shadow: slategrey 0.1rem 0.2rem 0.5rem;
  }
`;
