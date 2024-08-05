import React from "react";
import { styled } from "../../../theme/stitches";
import { Loader } from "../loader";

type ButtonType = "button" | "reset" | "submit";

interface ButtonProps {
  variant?: "primary" | "secondary" | "white";
  label: string;
  onClick?: any;
  icon?: JSX.Element;
  customStyle?: any;
  type?: ButtonType; // Use the ButtonType type
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  label,
  icon,
  customStyle,
  onClick,
  type = "button",
  isLoading = false,
}: ButtonProps) => {
  return (
    <>
      <StyledButton
        variant={variant}
        css={customStyle}
        type={type}
        disabled={isLoading}
        onClick={() => onClick()}
      >
        {!isLoading ? label : <Loader />}
        {icon && icon}
      </StyledButton>
    </>
  );
};

const StyledButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  color: "#ffffff",
  cursor: "pointer",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  backgroundColor: "$primary",
  transition: "0.2s ease-in-out",
  "&:hover": { scale: "0.9" },
  variants: {
    variant: {
      primary: {
        background: "$primary",
      },
      secondary: {
        background: "$secondary",
      },
      white: {
        background: "$white",
        color: "$primary",
      },
    },
  },
});
