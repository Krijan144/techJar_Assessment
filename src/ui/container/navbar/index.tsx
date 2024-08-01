"use client";

import React, { useState } from "react";
import { styled } from "../../../theme/stitches";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ItemProp {
  name: string;
  path: string;
}
const data = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/",
  },
  {
    name: "Success Stories",
    path: "/",
  },
  {
    name: "Employer Offerings",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
];
const index = () => {
  const route = useRouter();
  const [click, setClick] = useState(false);

  return (
    <>
      <Nav>
        <TopNav>
          <Flex>
            <span>Call us: +1-(246)-333 079</span>
            <span>inquiry@example.com</span>
          </Flex>
          <Flex style={{ paddingRight: "8rem" }}>
            <span>Register</span>
            <span>Login</span>
          </Flex>
        </TopNav>
        <StyledNav>
          <Image src={Logo.src} width={130} height={70} alt="" />
          <NavElementDesktop>
            {data?.map((item: ItemProp, index) => (
              <div key={index} onClick={() => route.push(item.path)}>
                <span>{item.name}</span>
              </div>
            ))}
          </NavElementDesktop>

          <div className={"hamburger_menu_container"}>
            <div
              className={click ? "hamburger_menu cross" : "hamburger_menu"}
              onClick={() => setClick(!click)}
            >
              <div></div>
            </div>
          </div>
        </StyledNav>
      </Nav>

      <NavElementMobile variant={click ? "show" : "hide"}>
        {data?.map((item: ItemProp, index) => (
          <div key={index} onClick={() => route.push(item.path)}>
            <span>{item.name}</span>
          </div>
        ))}
      </NavElementMobile>
    </>
  );
};

export default index;

const Nav = styled("div", {
  position: "fixed",
  width: "100%",
  top: "0",
  left: "0",
});

const TopNav = styled("div", {
  width: "100%",
  height: "40px",
  background: "#FFBD59",
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Lato, sans-serif",
  paddingLeft: "4rem",
  alignItems: "center",
});
const StyledNav = styled("div", {
  height: "5rem",

  backgroundColor: "$black",
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 3rem 1rem 3rem",
  alignItems: "center",
  img: {
    objectFit: "contain",
  },
});

const NavElementDesktop = styled("div", {
  display: "flex",
  cursor: "pointer",
  color: "$white",
  "@md": {
    display: "none",
  },
  div: {
    padding: "1rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    alignItems: "center",
    transition: "0.3s",

    "&:hover": {
      background: "$red",
    },
  },
});
const NavElementMobile = styled("div", {
  cursor: "pointer",
  color: "$white",
  background: "$black",
  height: "100vh",
  width: "100%",
  position: "fixed",
  top: "9rem",
  "@md2": {
    display: "none",
  },
  variants: {
    variant: {
      show: {
        opacity: "1",
        pointerEvents: "all",
      },
      hide: {
        opacity: "0",
        pointerEvents: "none",
      },
    },
  },
  div: {
    padding: "2rem 4rem 2rem 4rem",
    alignItems: "center",
    transition: "0.3s",
    "&:hover": {
      background: "$red",
    },
  },
});
const Flex = styled("div", { display: "flex", gap: 10 });
