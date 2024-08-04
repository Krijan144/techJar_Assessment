import React, { useState, ReactNode } from "react";

import Logo from "../../../../assets/logo.png";
import Hamburger from "../../../../assets/hamburger.png";
import LogoMob from "../../../../assets/logoMob.png";

import { MdOutlineDashboard } from "react-icons/md";
import AvatarDemo from "../../component/avatar";
import { styled } from "../../../theme/stitches";

interface LayoutProps {
  children: ReactNode;
}

const navData = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard />,
  },
];
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [click, setClick] = useState(false);

  return (
    <Flex>
      <StyledLayout variant={click ? "secondary" : "primary"}>
        <StyledDiv>
          <StyledLogo variant={click ? "mobile" : "web"} alt="">
            <img src={click ? LogoMob : Logo} />
          </StyledLogo>
          {navData?.map((item) => {
            return (
              <StyledItem>
                {item.icon}
                {!click && (
                  <div
                    onClick={() => {
                      // router.push(item.path);
                    }}
                  >
                    {item.name}
                  </div>
                )}
              </StyledItem>
            );
          })}
        </StyledDiv>
      </StyledLayout>
      <StyledParent>
        <StyledTopBar>
          <img
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

const StyledItem = styled("div", {
  display: "flex",
  alignItems: "center",
  transition: "0.3s",
  gap: 10,
  cursor: "pointer",
  padding: 15,
  "&:hover": {
    transform: "scale(0.95)",
  },
});
const StyledLogo = styled("div", {
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
});

const StyledParent = styled("div", {
  width: "100%",
});

const Flex = styled("div", {
  display: "flex",
});

const StyledDiv = styled("div", {
  width: "100%",
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
      },
      secondary: {
        width: "4rem",
      },
    },
  },
});
export default Layout;
