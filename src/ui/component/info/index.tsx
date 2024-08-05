import { styled, keyframes } from "../../../theme/stitches";

export const Info = () => (
  <TextBox>
    <div>Learn</div>
    <div>Innovate</div>
    <div>Growth</div>
  </TextBox>
);

export default Info;

const rollDown = keyframes({
  "0%": {
    top: "-40px",
    transform: "rotateX(-90deg)",
  },
  "11%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "22%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "33%": {
    top: "8px",
    transform: "rotateX(30deg)",
    opacity: 0,
  },
});

const rollDown2 = keyframes({
  "25%": {
    top: "-40px",
    transform: "rotateX(-90deg)",
  },
  "38%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "55%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "66%": {
    top: "8px",
    transform: "rotateX(30deg)",
    opacity: 0,
  },
});

const rollDown3 = keyframes({
  "58%": {
    top: "-40px",
    transform: "rotateX(-90deg)",
  },
  "71%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "88%": {
    top: "-15px",
    transform: "rotateX(0deg)",
    opacity: 1,
  },
  "100%": {
    top: "8px",
    transform: "rotateX(30deg)",
    opacity: 0,
  },
});

const TextBox = styled("div", {
  width: "100%",
  fontFamily: "$fontPoppins",
  position: "relative",
  marginTop: "1rem",
  marginLeft: "2rem",
  textAlign: "",
  "& div": {
    position: "absolute",
    top: "-40px",
    transform: "rotateX(-90deg)",
    opacity: 0,
    fontSize: "1.4rem",
    width: "100%",
    color: "$primaryColor",
    animationTimingFunction: "ease",
  },

  "& div:nth-child(1)": {
    animation: `${rollDown} 7s forwards infinite`,
  },

  "& div:nth-child(2)": {
    animation: `${rollDown2} 7s forwards infinite`,
  },

  "& div:nth-child(3)": {
    animation: `${rollDown3} 7s forwards infinite`,
  },
});
