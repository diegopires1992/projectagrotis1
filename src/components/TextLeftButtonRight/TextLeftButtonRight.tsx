import { Button } from "@mui/material";
import { TextLeft, Wrapper } from "./style";

interface TextLeftButtonRightProps {
  buttonText: string;
  textLeft: string;
  onButtonClick: () => void;
  buttonColor?: string;
  buttonHoverColor?: string;
}
export const TextLeftButtonRight: React.FC<TextLeftButtonRightProps> = ({
  buttonText,
  textLeft,
  onButtonClick,
  buttonColor = "#00796B",
  buttonHoverColor = "#00A98E"
}) => (
  <Wrapper>
    <TextLeft>
      <h3>{textLeft}</h3>
    </TextLeft>
    <Button
        sx={{
          backgroundColor: buttonColor,
          color: "white",
          "&:hover": {
            backgroundColor: buttonHoverColor,
          },
        }}
      type="submit"
      // variant="contained"
      onClick={onButtonClick}
    >
      {buttonText}
    </Button>
  </Wrapper>
);
