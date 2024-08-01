import { useState } from "react";
import { setValue } from "@/store/input/slice";
import { useGetRole } from "@/store/role";
import { useCreateUserMutation, useGetUserListQuery } from "@/store/services";
import { styled } from "@/theme/stitches";
import { Button } from "@/ui/component/button";
import DialogDemo from "@/ui/component/dialog";
import Header from "@/ui/component/header";
import { Input, LabelRoot } from "@/ui/component/input";
import Dropdown from "@/ui/component/select";
import React, { useRef } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import Table from "@/ui/container/table";
import { useGetUserList } from "@/store/userList";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FormikBase from "@/ui/container/formik";

const actionData = [
  {
    _id: 1,
    name: "Edit",
  },
  {
    _id: 1,
    name: "Delete",
  },
];
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  role_id: Yup.string().required("Role is required"),
  password: Yup.string().required("Password is required"),
  re_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
const UserTemplate = () => {
  const [url, setUrl] = useState("");
  const [file, setSelectedFile] = useState("");

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  useGetRole();
  useGetUserList();
  //selectors
  const roleData = useSelector((state: any) => state.role.data);
  const userData = useSelector((state: any) => state.userList.data);

  const roleLoading = useSelector((state: any) => state.role.isLoading);
  const handleFileClick = () => {
    inputRef.current.click();
  };
  const inputValue = useSelector((state: any) => state.inputValue);
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setUrl(URL.createObjectURL(selectedFile));
      // Handle the selected file here
      setSelectedFile(selectedFile);
    }
  };
  const handleSubmit = () => {
    console.log(inputValue);
    const formData = new FormData();
    formData.append("name", inputValue.name);
    formData.append("email", inputValue.email);
    formData.append("phone", inputValue.phone);
    formData.append("role_id", inputValue.role_id);
    formData.append("password", inputValue.password);
    formData.append("re_password", inputValue.re_password);
    formData.append("image", file);

    createUser({ formData });
  };

  return (
    <>
      {/* <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props, otherProps) => {

      }}
      renderForm={({ values, errors, handleChange, resetForm, setFieldValue }) => {
        return (<></>)
      }
    }
        /> */}
      <StyledMain>
        <Header label="User Management" />
        <DialogDemo
          dialogTrigger={<StyledTrigger>Create User</StyledTrigger>}
          title="Create User"
        >
          <Input label="Name" name="name" value={inputValue?.name}></Input>
          <Input label="Email" name="email" value={inputValue?.email}></Input>
          <Input label="Phone" name="phone" value={inputValue?.phone}></Input>
          <Dropdown data={roleData} label="role" name="role_id" />
          <Input
            label="Password"
            name="password"
            value={inputValue?.password}
          ></Input>
          <Input
            label="Re-Password"
            name="re_password"
            value={inputValue?.re_password}
          ></Input>
          <LabelRoot
            css={{
              marginTop: "10px",
              marginBottom: "10px",
              position: "relative",
            }}
          >
            Image
            {file && (
              <AiFillCloseCircle
                onClick={() => {
                  setSelectedFile("");
                }}
                style={{
                  fill: "red",
                  fontSize: 30,
                  position: "absolute",
                  left: 80,
                  top: 12,
                  cursor: "pointer",
                }}
              />
            )}
          </LabelRoot>

          <StyledImage onClick={handleFileClick}>
            {file ? (
              <>
                <Image src={url} height={70} width={70} alt={"file"} />
              </>
            ) : (
              <AiOutlinePlus />
            )}
          </StyledImage>
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            label="Submit"
            onClick={() => {
              handleSubmit();
            }}
          />
        </DialogDemo>
        {userData.length && (
          <Table headers={["Name", "Email", "Role", "Status", "Action"]}>
            {userData.map((item: any) => {
              return (
                <>
                  <StyledP>{item.name}</StyledP>
                  <StyledP>{item.email}</StyledP>
                  <StyledP>{item.role_id.name}</StyledP>
                  <StyledP>{item.status}</StyledP>
                  <div>
                    <Dropdown
                      data={actionData}
                      name="action"
                      labelShow={false}
                      label={"Action"}
                    />
                  </div>
                </>
              );
            })}
          </Table>
        )}
      </StyledMain>
    </>
  );
};

export default UserTemplate;
const StyledP = styled("span", {
  fontSize: "$large",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});
const StyledMain = styled("div", {
  boxShadow: "0px 0px 20px 0px rgba(76, 87, 125, 0.02)",
  padding: "1rem",
  borderRadius: 10,
  background: "$white",
});
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
export const StyledTrigger = styled("div", {
  padding: "1rem",
  background: "$primary",
  width: "fit-content",
  color: "$white",
  borderRadius: "8px",
  transition: "0.2s",
  float: "right",
  "&:hover": {
    scale: "0.91",
  },
});
