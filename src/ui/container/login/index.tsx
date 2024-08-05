import LoginForm from "./form";
import { connect } from "react-redux";
import Logo from "../../../../assets/logo.png";
import { login } from "../../../store/app/actions";
import { AppState } from "../../../store/reducer";
import Info from "../../component/info";
import { Icon } from "../../component/card";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineShowChart } from "react-icons/md";
import { styled, keyframes } from "../../../theme/stitches";

type LoginType = {
  isLoading: boolean;
  login: ({}) => void;
};

const Login = ({ isLoading, login }: LoginType) => {
  return (
    <>
      <StyledLogin>
        <StyledWrapper>
          <StyledHeader>
            <StyledLogo>
              <img src={Logo} alt="" />
            </StyledLogo>
            <Info />
          </StyledHeader>

          <LoginForm
            isLoading={isLoading}
            onCreate={(values: any) => {
              login({ values });
            }}
          />
          <StyledFlex>
            <Icon
              icon={<AiFillDollarCircle />}
              iconBg="$primary"
              size="2.5rem"
            />
            <Icon icon={<MdSell />} iconBg="$primary" size="2.5rem" />
            <Icon
              icon={<MdOutlineShowChart />}
              iconBg="$primary"
              size="2.5rem"
            />
            <Icon
              icon={<HiMiniSquare3Stack3D />}
              iconBg="$primary"
              size="2.5rem"
            />
          </StyledFlex>
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
  padding: "4rem",
  position: "relative",
  height: "calc(100vh - 128px)",
  overflow: "hidden",
  background: "#f2f2f2",
});
const StyledWrapper = styled("div", {
  padding: "2rem",
  width: "30rem",
  position: "absolute",
  borderRadius: "4px",
  left: "50%",
  right: "50%",
  top: "-5rem",
  transform: "translate(-50%,50%)",
  background: "$white",
  boxShadow: "rgba(0, 140, 130, 0.4) 0px 30px 90px",
});
const StyledLogo = styled("div", {
  width: "100%",
  objectFit: "contain",
  alignItems: "center",
  img: {
    width: 200,
  },
});

const StyledFlex = styled("div", {
  display: "flex",
  columnGap: "1rem",
  marginTop: "6rem",
  position: "absolute",
  width: "inherit",
  justifyContent: "center",
});
