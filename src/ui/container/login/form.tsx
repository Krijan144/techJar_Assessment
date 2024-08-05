import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../component/button";
import { Input } from "../../component/input";
import FormikBase from "../formik";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const LoginForm = ({ onCreate, handleSubmit, isLoading }: any) => {
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
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
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
                isLoading={isLoading}
                label="Log In"
                type="submit"
                customStyle={{ width: "94%" }}
              />
            </Form>
          </>
        );
      }}
    />
  );
};

export default LoginForm;
