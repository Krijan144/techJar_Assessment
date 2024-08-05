import { styled } from "../../../theme/stitches";

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
  overflow: "auto",
});
const StyledTable = styled("div", {
  padding: "1rem",
  borderRadius: 10,
  "@sm2": {
    padding: "0.5rem",
    fontSize: "12px",
  },
});
const Headers = styled("div", {
  width: "100%",
  paddingTop: "2rem",
  display: "grid",
  borderBottom: "2px dashed #eff2f5",
  paddingBottom: "1rem",
});
const Header = styled("h4", {
  color: "#A1A5B7",
  "@sm2": {
    fontSize: "14px",
  },
});
