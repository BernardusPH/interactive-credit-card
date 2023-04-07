import React, { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const CardDetails = React.createContext({
  fullName: "",
  cNum: "",
  expMonth: "",
  expYear: "",
  cvc: "",
  submitted: false,
});

export const FormStorageProvider = (props) => {
  const [submitted, setSubmitted] = useState(false);
  let cardMaxChar = {
    fullName: 21,
    cNum: 16,
    expMonth: 2,
    expYear: 2,
    cvc: 3,
  };

  const cardForm = useFormik({
    initialValues: {
      fullName: "",
      cNum: "",
      expMonth: "",
      expYear: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required("Cant be blank")
        .max(40, "Exceeded max characters")
        .matches(
          /^[A-Za-z]+(?:\s+[A-Za-z]+){1,2}$/,
          "Must be a valid Full name e.i John Doe"
        ),
      cNum: Yup.string()
        .required("Cant be blank")
        .min(16,"Must be atleast 16 chararcters long")
        .matches(/^(\d{4}\s?){4}$/, "Wrong format, must be numbers"),
      expMonth: Yup.string()
        .matches(/^(0?[1-9]|1[0-2])$/, "Must be a valid month")
        .required("Cant be blank"),
      expYear: Yup.string()

        .matches(/^(0[1-9]|[1-9][0-9]?)$/, "Must be a valid Year")
        .required("Cant be blank"),
      cvc: Yup.string()
        .required("Cant be blank")
        .matches(/^\d{3}$/, "Must be a valid CVC, 3 number code"),
    }),
    onSubmit: () => {
      setSubmitted(true);
    },
  });

  return (
    <CardDetails.Provider
      value={{
        cardForm: cardForm,
        inputLimit: cardMaxChar,
        didSubmit: submitted,
      }}
    >
      {props.children}
    </CardDetails.Provider>
  );
};

export default CardDetails;
