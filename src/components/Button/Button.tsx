import { StyledButton } from "./styles";

interface Props {
  onClick: () => void;
}

export const Button = ({ onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      Click here to change the color
    </StyledButton>
  );
};
