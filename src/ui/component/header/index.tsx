import { styled } from "@stitches/react";
interface HeaderInterface {
  label: string;
  css?: any;
}
const Header = ({ label, css }: HeaderInterface) => {
  return <StyledHeader style={css}>{label}</StyledHeader>;
};

export default Header;
const StyledHeader = styled("h4", {
  color: "$primary",
  fontSize: "$large",
  // fontWeight: "bold",
  padding: "1rem",
  paddingBottom: "0",
});
