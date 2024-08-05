import React from "react";

import * as Label from "@radix-ui/react-label";
import { styled } from "../../../theme/stitches";
import { blackA } from "@radix-ui/colors";

interface InputProps {
  label?: string;
  customStyle?: any;
  value?: any;
  id?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: any;
  error?: string | undefined;
  labelCss?: any;
}

const Flex = styled("div", { display: "flex" });

export const Input = ({
  id,
  label = "",
  value,
  name = "",
  customStyle,
  labelCss,
  placeholder = "Aa",
  type = "text",
  onChange,
  error,
}: InputProps) => {
  return (
    <Flex
      css={{
        padding: "10px 0 5px 0px",
        flexWrap: "wrap",
        gap: 15,
        alignItems: "center",
      }}
    >
      <LabelRoot htmlFor="" css={labelCss}>
        {label}
      </LabelRoot>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue=""
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        css={customStyle}
      />
      {error && <StyledError>{error}</StyledError>}
    </Flex>
  );
};
const StyledError = styled("div", {
  fontSize: 12,
  color: "red",
});
export const LabelRoot = styled(Label.Root, {
  fontSize: 15,
  lineHeight: "15px",
});

const StyledInput = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: blackA.blackA5,
  "&:focus": { boxShadow: `rgba(0,123,255,0.2) 0px 4px 12px` },
});
