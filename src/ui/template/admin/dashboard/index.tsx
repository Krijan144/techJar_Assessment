import { styled } from "@stitches/react";
import React from "react";

const DashboardTemplate = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <StyledContainer></StyledContainer>
    </div>
  );
};

export default DashboardTemplate;
const StyledContainer = styled("div", {
  padding: "1rem",
});
