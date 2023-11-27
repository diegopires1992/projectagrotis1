import { Button } from "@mui/material";
import { TextLeft, Wrapper } from "./style";

interface TextLeftButtonRightProps {
  buttonText: string;
  textLeft: string;
  onButtonClick: () => void;
}
export const TextLeftButtonRight: React.FC<TextLeftButtonRightProps> = ({ buttonText,textLeft, onButtonClick }) => (
  <Wrapper>
    <TextLeft>
      <h3>{textLeft}</h3>
    </TextLeft>
    <Button type="submit" variant="contained" onClick={onButtonClick}>
      {buttonText}
    </Button>
  </Wrapper>
);

