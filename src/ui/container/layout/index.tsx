import React, { useState, ReactNode } from "react";

import Logo from "../../../../assets/logo.png";
import Hamburger from "../../../../assets/hamburger.png";
import LogoMob from "../../../../assets/logoMob.png";

import { MdOutlineDashboard } from "react-icons/md";
import AvatarDemo from "../../component/avatar";
import { styled } from "../../../theme/stitches";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const navData = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard />,
  },
  {
    id: 2,
    name: "Employee",
    path: "/employee",
    icon: <FaUser />,
  },
];
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [click, setClick] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  return (
    <Flex>
      <StyledLayout variant={click ? "secondary" : "primary"}>
        <StyledDiv>
          <StyledLogo variant={click ? "mobile" : "web"} alt="">
            <img src={click ? LogoMob : Logo} />
          </StyledLogo>
          <StyledMLogo alt="">
            <img src={LogoMob} />
          </StyledMLogo>
          {navData?.map((item) => {
            return (
              <Link
                to={item.path}
                onClick={() => {
                  setActive(item.id);
                }}
              >
                <StyledItem variant={active === item.id && "active"}>
                  {item.icon}
                  {!click && <StyledN>{item.name}</StyledN>}
                </StyledItem>
              </Link>
            );
          })}
        </StyledDiv>
      </StyledLayout>
      <StyledParent>
        <StyledTopBar>
          <StyledHburger
            onClick={() => {
              setClick(!click);
            }}
            style={{ marginLeft: "10px" }}
            src={Hamburger}
            width={15}
            height={15}
            alt=""
          />
          <AvatarDemo fallbackText="John Doe" variant="md" />
        </StyledTopBar>
        <StyledContent>{children}</StyledContent>
      </StyledParent>
    </Flex>
  );
};

// Styling
const StyledN = styled("div", {
  "@sm2": {
    display: "none",
  },
});
const StyledHburger = styled("img", {
  "@sm2": {
    display: "none",
  },
});
const StyledItem = styled("div", {
  display: "flex",
  alignItems: "center",
  transition: "0.3s",
  gap: 10,
  cursor: "pointer",
  padding: 15,
  variants: {
    variant: {
      active: {
        background: "$primary",
        color: "$white",
      },
    },
  },
  "&:hover": {
    transform: "scale(0.95)",
  },
});
export const StyledLogo = styled("div", {
  width: 100,
  objectFit: "contain",
  padding: "18px 0 15px 15px",
  img: {
    width: "100%",
  },
  variants: {
    variant: {
      mobile: {
        width: 25,
      },
      web: {
        width: 120,
      },
    },
  },
  "@sm2": {
    display: "none",
  },
});
export const StyledMLogo = styled("div", {
  width: 25,
  objectFit: "contain",
  padding: "18px 0 15px 15px",
  img: {
    width: "100%",
  },

  "@sm": {
    display: "none",
  },
  "@sm2": {
    display: "block",
  },
});

const StyledParent = styled("div", {
  width: "100%",
});

const Flex = styled("div", {
  display: "flex",
});

const StyledDiv = styled("div", {
  width: "100%",
  a: {
    textDecoration: "none",
    color: "$primary",
  },
});

const StyledTopBar = styled("div", {
  height: 60,
  alignItems: "center",
  display: "flex",
  background: "$white",
  paddingRight: 10,
  justifyContent: "space-between",
  borderBottom: "2px solid #f2f2f2",
  img: {
    transition: "0.3s ease-in",
    cursor: "pointer",
  },
});

const StyledContent = styled("div", {
  minHeight: "95vh",
});
const StyledLayout = styled("div", {
  textAlign: "center",
  transition: "0.3s ease-in",
  borderRight: "2px solid #f2f2f2",
  color: "$primary",
  background: "$white",
  img: {
    transition: "0.3s ease-in",
    cursor: "pointer",
  },

  variants: {
    variant: {
      primary: {
        width: "20rem",
        "@sm2": {
          width: "4rem",
        },
      },
      secondary: {
        width: "4rem",
      },
    },
  },
});
export default Layout;
