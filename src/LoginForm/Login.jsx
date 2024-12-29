import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.scss";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  userName: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username cannot exceed 15 characters"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('isAuthenticated',true);
      localStorage.setItem('loginDetails',JSON.stringify(values, null, 2))
      navigate("/", { replace: true });
    },
  });

  useEffect(() => {
    if (
      formik.values.userName &&
      formik.values.password &&
      !Object.keys(formik.errors).length
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formik.values, formik.errors]);

  return (
    <div className={styles.login_Container}>
      <div className={styles.login_form_Container}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            placeholder="UserName"
            type="text"
            fullWidth
            id="userName"
            name="userName"
            label="UserName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            placeholder="Password"
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={disabled}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
