import React, { useState } from "react";
import Logo from "../../../../public/logo.png";
import Hamburger from "../../../../public/hamburger.png";

import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import AvatarDemo from "../../component/avatar";
import { styled } from "../../../theme/stitches";

interface ItemProp {
  name: string;
  path: string;
}
const navData = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard />,
  },
];
const Sidebar = ({ children }: any) => {
  const [click, setClick] = useState(false);

  return (
    <Flex>
      <StyledSidebar variant={click ? "secondary" : "primary"}>
        <StyledDiv>
          <img
            src={Logo}
            width={click ? 40 : 130}
            height={click ? 20 : 70}
            alt=""
          />
          <br />
          <br />

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
      </StyledSidebar>
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
          <AvatarDemo fallbackText="John Doe" />
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
const StyledImage = styled("img", {});

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
  boxShadow: "0px 0px 2px 0px #gray",
  height: 100,
  alignItems: "center",
  display: "flex",
  background: "$white",
  justifyContent: "space-between",
  img: {
    transition: "0.3s ease-in",
    cursor: "pointer",
  },
});

const StyledContent = styled("div", {
  padding: "1.5rem",
  background: "#F2F5F8",
});
const StyledSidebar = styled("div", {
  height: "100vh",
  // position: "fixed",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  transition: "0.3s ease-in",
  borderRight: "2px solid #f2f2f2",
  // left: 0,
  // top: 0,
  color: "$primary",
  background: "$white",
  img: {
    transition: "0.3s ease-in",
    cursor: "pointer",
    objectFit: "contain",
    padding: 15,
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
export default Sidebar;
