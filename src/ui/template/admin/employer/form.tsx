import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/ui/component/button";
import { Input } from "@/ui/component/input";
import FormikBase from "@/ui/container/formik";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

const EmployerForm = ({ onEdit, onCreate, formData }: any) => {
  const initialValues = formData
    ? {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }
    : {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
      };

  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props: any, otherProps: any) => {
        const { ...values } = props;
        formData ? onEdit(values, otherProps) : onCreate(values, otherProps);
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
                label="First Name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                error={errors.first_name}
              />

              <Input
                label="Last Name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                error={errors.last_name}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                label="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
              />

              <Button label="Submit" type="submit" onClick={() => {}} />
            </Form>
          </>
        );
      }}
    />
  );
};

export default EmployerForm;
