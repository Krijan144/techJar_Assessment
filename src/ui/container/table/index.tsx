import { styled } from "@/theme/stitches";
import React from "react";

const Table = ({ headers, children, columnStyle }: any) => {
  return (
    <>
      <StyledTable>
        <Headers style={columnStyle}>
          {headers.map((item: string) => (
            <Header>{item}</Header>
          ))}
        </Headers>

        <StyledData style={columnStyle}>{children}</StyledData>
      </StyledTable>
    </>
  );
};

export default Table;

const StyledData = styled("div", {
  display: "grid",
  borderBottom: "1px dashed #eff2f5",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  height: "calc(100vh - 340px)",
  overflow: "auto",
});
const StyledTable = styled("div", {
  padding: "2rem",
  width: "100%",
  borderRadius: 10,
});
const Headers = styled("div", {
  width: "100%",
  paddingTop: "2rem",
  display: "grid",
  borderBottom: "2px dashed #eff2f5",
  paddingBottom: "1rem",
});
const Header = styled("h4", {
  fontSize: "$large",
  color: "#A1A5B7",
});
