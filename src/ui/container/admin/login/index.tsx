import React, { useState } from "react";
import LoginForm from "./form";

import { styled } from "@stitches/react";
import Header from "../../../component/header";

const Login = () => {
  return (
    <>
      <StyledLogin>
        <StyledWrapper>
          <StyledHeader>
            {/* <Image src={Logo.src} width={200} height={100} alt="" /> */}
            <Header label="Sign In to Tech Jar" css={{ color: "white" }} />
          </StyledHeader>

          <LoginForm
            onCreate={(e: any) => {
              // handleSubmit(e);
            }}
          />
        </StyledWrapper>
      </StyledLogin>
    </>
  );
};

export default Login;
Header;
const StyledHeader = styled("div", {
  padding: "2rem",
  textAlign: "center",
  img: {
    objectFit: "contain",
    paddingBottom: "1rem",
  },
});
const StyledLogin = styled("div", {
  height: "100vh",
  padding: "4rem",
  width: "100%",
  background: "$primary",
  position: "relative",
  // backgroundImage: `url('${Logo2.src}')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "bottom",
});
const StyledWrapper = styled("div", {
  padding: "2rem",
  width: "30rem",
  position: "absolute",
  background: "$primary",
  left: "50%",
  right: "50%",
  top: "-30%",
  borderRadius: "4px",
  transform: "translate(-50%,50%)",
  fontFamily: "poppins",
});
