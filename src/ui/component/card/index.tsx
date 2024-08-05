import { styled } from "../../../theme/stitches";

interface CardProps {
  color: string;
  icon: React.ReactNode;
  number: string;
  text: string;
  iconBg: string;
}
interface IconProps {
  icon: React.ReactNode;
  iconBg: string;
  css?: any;
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

export const Icon = ({ icon, iconBg, css }: IconProps) => {
  return (
    <StyledIcon variant="lg" css={{ svg: { background: iconBg }, ...css }}>
      {icon}
    </StyledIcon>
  );
};

const StyledDiv = styled("div", {
  padding: "1rem",
  borderRadius: "5px",
  marginRight: "1rem",
  marginBottom: "1rem",
  width: "8rem",
  "@sm2": {
    width: "5rem",
  },
});

const StyledNumber = styled("div", {
  fontSize: "$large",
  padding: "0.5rem 0 0.5rem 0",
  "@sm2": {
    fontSize: "12px",
  },
});
const StyledText = styled("p", {
  fontSize: "16px",
  "@sm2": {
    fontSize: "12px",
  },
});

const StyledIcon = styled("div", {
  variants: {
    variant: {
      lg: {
        svg: {
          fontSize: "2.5rem",
          "@sm2": {
            fontSize: "1.5rem",
          },
        },
      },
    },
  },
  svg: {
    fontSize: "1.5rem",
    fill: "$white",
    padding: "0.5rem",
    borderRadius: "50%",
    "@sm2": {
      fontSize: "1rem",
    },
  },
});
