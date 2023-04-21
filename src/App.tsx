import { useState } from "react";
import { Button } from "./components/Button/Button";
import { SubHeaders } from "./components/SubHeaders/SubHeaders";
import { StyledBouncingBox, StyledHeader, StyledMain } from "./styles";
import { callTaggedTemplate } from "./utils";

function App() {
  const [boxColor, setBoxColor] = useState<string>("dodgerblue");
  const shape = "square";
  const isBlue = boxColor === "dodgerblue";

  const handleChangeColor = () => {
    setBoxColor((prevColor) =>
      prevColor === "dodgerblue" ? "tomato" : "dodgerblue"
    );
  };

  return (
    <StyledMain>
      <div>
        <StyledBouncingBox boxColor={boxColor} />
        <hr />
        <p>{callTaggedTemplate`This is a ${shape} and ${isBlue}`}</p>
        <hr />
        <StyledHeader>Hello world ...</StyledHeader>
        <SubHeaders />
        <Button onClick={handleChangeColor} />
      </div>
    </StyledMain>
  );
}

export default App;
