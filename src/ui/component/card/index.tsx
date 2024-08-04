import { styled } from "../../../theme/stitches";

interface CardProps {
  color: string;
  icon: React.ReactNode;
  number: string;
  text: string;
  iconBg: string;
}

const Card = ({ color, icon, number, text, iconBg }: CardProps) => {
  return (
    <StyledDiv css={{ background: color }}>
      <StyledIcon css={{ svg: { background: iconBg } }}>{icon}</StyledIcon>
      <StyledNumber>{number}</StyledNumber>
      <StyledText>{text}</StyledText>
    </StyledDiv>
  );
};

export default Card;

const StyledDiv = styled("div", {
  padding: "1rem",
  borderRadius: "5px",
  marginRight: "1rem",
  marginBottom: "1rem",
  width: "8rem",
});

const StyledNumber = styled("div", {
  fontSize: "$large",
  padding: "0.5rem 0 0.5rem 0",
});
const StyledText = styled("p", {
  fontSize: "16px",
});

const StyledIcon = styled("div", {
  svg: {
    fontSize: "1.5rem",
    fill: "$white",
    padding: "0.5rem",
    borderRadius: "50%",
  },
});
