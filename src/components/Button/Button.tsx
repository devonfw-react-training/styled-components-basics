interface Props {
  onClick: () => void;
}

export const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Click here to change the color</button>;
};
