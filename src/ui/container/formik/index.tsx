import React, { useEffect } from "react";

import { Formik } from "formik";

const FormikBase: React.FC<{
  validationSchema: any;
  onSubmit: any;
  renderForm: any;
  initialValues: any;
  innerRef?: any;
}> = ({ renderForm, initialValues, validationSchema, onSubmit, ...props }) => {
  return (
    <div>
      <Formik
        validateOnBlur={false}
        validateOnMount={false}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        {...props}
      >
        {(props) => renderForm({ ...props })}
      </Formik>
    </div>
  );
};

export default FormikBase;
