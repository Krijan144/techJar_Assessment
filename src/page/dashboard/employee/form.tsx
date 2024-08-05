import { Form } from "formik";
import * as Yup from "yup";
import { Input } from "../../../ui/component/input";
import FormikBase from "../../../ui/container/formik";
import { Button } from "../../../ui/component/button";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const EmployeeForm = ({ onEdit, onCreate, formData }: any) => {
  console.log(formData);

  const initialValues = formData
    ? {
        id: formData.id,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
      }
    : {
        id: Math.random(),
        firstname: "",
        lastname: "",
        email: "",
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
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                error={errors.firstname}
              />

              <Input
                label="Last Name"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                error={errors.lastname}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Button label="Submit" type="submit" />
            </Form>
          </>
        );
      }}
    />
  );
};

export default EmployeeForm;
