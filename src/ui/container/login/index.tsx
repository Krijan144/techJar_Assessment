import React, { useState } from "react";
import LoginForm from "./form";
import { connect } from "react-redux";

import { styled } from "@stitches/react";
import Header from "../../component/header";
import { login } from "../../../store/app/actions";
import { AppState } from "../../../store/reducer";

const Login = ({ isLoading, login }) => {
  return (
    <>
      <StyledLogin>
        <StyledWrapper>
          <StyledHeader>
            {/* <Image src={Logo.src} width={200} height={100} alt="" /> */}
            <Header label="Sign In to Tech Jar" />
          </StyledHeader>

          <LoginForm
            onCreate={(values: any) => {
              console.log(values);

              login({ values });
              // handleSubmit(e);
            }}
          />
        </StyledWrapper>
      </StyledLogin>
    </>
  );
};

const mapStateToProps = ({
  appState: { notification, isLoading },
}: AppState) => ({
  notification,
  isLoading,
});

const mapDispatchToProps = { login };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);

const StyledHeader = styled("div", {
  padding: "2rem",
  textAlign: "center",
});
const StyledLogin = styled("div", {
  // height: "100vh",
  padding: "4rem",
  // width: "100%",
  // background: "$primary",
  position: "relative",
  // backgroundImage: `url('${Logo2.src}')`,
  // backgroundSize: "contain",
  // backgroundRepeat: "no-repeat",
  // backgroundPositionY: "bottom",
});
const StyledWrapper = styled("div", {
  padding: "2rem",
  width: "30rem",
  position: "absolute",
  // background: "$primary",
  left: "50%",
  right: "50%",
  top: "-30%",
  borderRadius: "4px",
  transform: "translate(-50%,50%)",
});
