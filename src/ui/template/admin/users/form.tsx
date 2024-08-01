import React, { useState, useRef } from "react";
import { Button } from "@/ui/component/button";
import { Input, LabelRoot } from "@/ui/component/input";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { styled } from "@/theme/stitches";

const EmployerForm = ({
  handleFileChange,
  handleSubmit,
  file,
  url,
  inputValue,
}: any) => {
  console.log({ url, file });
  const inputRef = useRef(null);
  const handleFileClick = () => {
    inputRef.current.click();
  };
  return <></>;
};

export default EmployerForm;
const StyledImage = styled("div", {
  position: "relative",
  width: "8rem",
  height: "10rem",
  border: "3px dashed $primary",
  borderRadius: 4,
  alignItems: "center",
  textAlign: "center",
  marginBottom: 10,
  cursor: "pointer",
  img: {
    marginTop: 20,
  },
  svg: {
    color: "$primary",
    fontSize: "4rem",
    marginTop: "2.5rem",
  },
});
