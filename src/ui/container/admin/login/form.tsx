import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../component/button";
import { Input } from "../../../component/input";
import FormikBase from "../../formik";
// import { Button } from "@/ui/component/button";
// import { Input } from "@/ui/component/input";
// import FormikBase from "@/ui/container/formik";



const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ onCreate, handleSubmit }: any) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props: any, otherProps: any) => {
        const { ...values } = props;
        onCreate(values, otherProps);
      }}
      renderForm={({
        values,
        errors,
        handleChange,
        resetForm,
        setFieldValue,
      }: any) => {
        return (
          <>
            <Form>
              <Input
                labelCss={{ color: "white" }}
                customStyle={{ color: "white" }}
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                labelCss={{ color: "white" }}
                customStyle={{ color: "white" }}
                label="Password"
                name="password"
                placeholder="Enter Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
              />
              <br />
              <Button
                label="Log In"
                type="submit"
                customStyle={{ width: "24rem" }}
                variant="white"
                onClick={() => {}}
              />
            </Form>
          </>
        );
      }}
    />
  );
};

export default LoginForm;
