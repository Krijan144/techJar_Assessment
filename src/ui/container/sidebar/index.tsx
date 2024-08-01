"use client";

import React, { useState } from "react";
import { styled } from "../../../theme/stitches";
import Logo from "../../../../public/logo.png";
import Hamburger from "../../../../public/hamburger.png";

import Image from "next/image";
import { useRouter } from "next/navigation";
import AvatarDemo from "../../../ui/component/avatar";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { useGetMe } from "@/store/me";
import { useDispatch, useSelector } from "react-redux";

interface ItemProp {
  name: string;
  path: string;
}
const navData = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdOutlineDashboard />,
    permission: ["Super Admin", "Admin", "Employer"],
  },
  {
    name: "Employer",
    path: "/admin/employer",
    icon: <FiUsers />,
    permission: ["Super Admin", "Admin"],
  },
];
const Sidebar = ({ children }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [click, setClick] = useState(false);

  useGetMe();
  //selectors
  const meData = useSelector((state: any) => state.me.data);
  const filterNavData = (data: Array<ItemProp>, role: string) => {
    return data.filter((item) => {
      return item.permission.includes(role);
    });
  };

  // Filter navData based on user's role
  const filteredNavData =
    meData && filterNavData(navData, meData?.role_id?.name);
  console.log({ meData });
  return (
    <Flex>
      <StyledSidebar variant={click ? "secondary" : "primary"}>
        <StyledDiv>
          <Image
            src={Logo.src}
            width={click ? 40 : 130}
            height={click ? 20 : 70}
            alt=""
          />
          <br />
          <br />

          {filteredNavData &&
            filteredNavData.length &&
            filteredNavData?.map((item) => {
              return (
                <StyledItem>
                  {item.icon}
                  {!click && (
                    <div
                      onClick={() => {
                        router.push(item.path);
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
          <Image
            onClick={() => {
              setClick(!click);
            }}
            style={{ marginLeft: "10px" }}
            src={Hamburger.src}
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
const StyledParent = styled("div", {
  width: "100%",
});
const Flex = styled("div", {
  display: "flex",
});
const StyledDiv = styled("div", {
  width: "100%",
  background: "$primary",
});
const StyledTopBar = styled("div", {
  boxShadow: "0px 0px 4px 0px #1A17171F",
  height: 100,
  alignItems: "center",
  display: "flex",
  background: "$white",
  padding: "2rem",
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

  // left: 0,
  // top: 0,
  color: "$white",
  background: "$primary",
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
