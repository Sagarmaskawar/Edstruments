import React, { useState } from "react";
import vendor_icon from "../Images/Vendor_Icon.png";
import down_arrow from "../Images/down_arrow.png";
import invoice_icon from "../Images/Invoice_Icon.png";
import comment_icon from "../Images/Comments_Icon.png";
import verticaldot from "../Images/dots-vertical.png";
import plus_Icon from "../Images/plus_Icon.png";
import styles from "./FormDetails.module.scss";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  Button,
  FormControl,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  styled,
} from "@mui/material";
import {
  accounts,
  departments,
  invoiceNumbers,
  locations,
  paymentTerms,
  purchaseOrderNumbers,
  vendorcategories,
} from "../ShareComponents/utils";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";

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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const FormDetails = () => {
  const savedData = localStorage.getItem("formData");
  const initialData = savedData ? JSON.parse(savedData) : {};
  const [toggler, setToggler] = useState(1);
  const DRAFT_KEY = "myFormDraft";
  const formik = useFormik({
    initialValues: {
      vendor: initialData.vendor || "",
      purchaseOrderNumbers: initialData.purchaseOrderNumbers || "",
      invoiceNumber: initialData.invoiceNumber || "",
      invoiceDate:
        (initialData.invoiceDate && dayjs(initialData.invoiceDate)) || "",
      totalAmount: initialData.totalAmount || "",
      paymentTerms: initialData.paymentTerms || "",
      invoiceDueDate:
        (initialData.invoiceDueDate && dayjs(initialData.invoiceDueDate)) || "",
      glPostDate:
        (initialData.glPostDate && dayjs(initialData.glPostDate)) || "",
      invoiceDes: initialData.invoiceDes || "",
      lineAmount: initialData.lineAmount || "",
      department: initialData.department || "",
      account: initialData.account || "",
      location: initialData.location || "",
      expensedes: initialData.expensedes || "",
      comments: initialData.comments || "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("coming herer");
      localStorage.setItem("formData", JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const saveAsDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(formik.values));
    alert("Draft saved!");
  };

  return (
    <div className={styles.formDetails_Container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formDetails_Container_heading}>
          <div className={styles.formDetails_Container_heading_img}>
            <img src={vendor_icon} alt="icon" />
          </div>{" "}
          <h1 className="H1_Bold_24px_primary">Vendor Details</h1>
        </div>
        <h1 className="H1_Medium_20px_primary">Vendor Information</h1>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <span className={`${styles.span_label} bodyspan_16px_regular`}>
            {" "}
            Vendor <span className={styles.red_span}>*</span>{" "}
          </span>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            name="vendor"
            value={formik.values.vendor}
            onChange={formik.handleChange}
            displayEmpty
            sx={{
              "& .MuiSelect-select": {
                color: formik.values.vendor ? "inherit" : "#a9a9a9",
              },
            }}
            input={<BootstrapInput />}
          >
            <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
              Select Vendor
            </MenuItem>
            {vendorcategories.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <div className={styles.formDetails_Container_dropdown_details}>
          <img src={down_arrow} alt="downarrow" />{" "}
          <span className="bodyspan_14px_blue">View Vendor Details</span>
        </div>
        <div className={styles.formDetails_Container_heading}>
          <div className={styles.formDetails_Container_heading_img}>
            <img src={invoice_icon} alt="icon" />
          </div>{" "}
          <h1 className="H1_Bold_24px_primary">Invoice Details</h1>
        </div>
        <h1 className="H1_Medium_20px_primary">General Information</h1>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <span className={`${styles.span_label} bodyspan_16px_regular`}>
            {" "}
            Purchase Order Number <span className={styles.red_span}>
              *
            </span>{" "}
          </span>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            name="purchaseOrderNumbers"
            value={formik.values.purchaseOrderNumbers}
            onChange={formik.handleChange}
            displayEmpty
            sx={{
              "& .MuiSelect-select": {
                color: formik.values.purchaseOrderNumbers
                  ? "inherit"
                  : "#a9a9a9",
              },
            }}
            input={<BootstrapInput />}
          >
            <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
              Select PO Number
            </MenuItem>
            {purchaseOrderNumbers.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <h1 className="H1_Bold_24px_primary">Invoice Details</h1>
        <div>
          <div className={styles.double_div}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Invoice Number <span className={styles.red_span}>*</span>{" "}
              </span>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                name="invoiceNumber"
                value={formik.values.invoiceNumber}
                onChange={formik.handleChange}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    color: formik.values.invoiceNumber ? "inherit" : "#a9a9a9",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
                  Select Invoice Number
                </MenuItem>
                {invoiceNumbers.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Invoice Date<span className={styles.red_span}>*</span>{" "}
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="invoiceDate"
                  type="date"
                  value={formik.values.invoiceDate || null}
                  onChange={(newValue) => {
                    formik.setFieldValue("invoiceDate", newValue); // Manually update Formik value
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div className={styles.double_div}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Total Amount <span className={styles.red_span}>*</span>{" "}
              </span>
              <TextField
                //   label="With normal TextField"
                id="outlined-start-adornment"
                name="totalAmount"
                type="number"
                placeholder="0.00"
                value={formik.values.totalAmount}
                onChange={formik.handleChange}
                sx={{
                  m: 1,
                  // width: '25ch',
                  "& .MuiInputAdornment-root": {
                    //   backgroundColor: '#f0f0f0', // Background for adornment
                    height: "100%", // Match the height of the input field
                    //   display: 'flex',
                    //   alignItems: 'center',
                    //   justifyContent: 'center',
                    //   padding: '0 8px',
                    borderRadius: "4px 0 0 4px", // Rounded corners on the left
                  },
                  "& .MuiInputBase-root": {
                    paddingLeft: "0",
                    paddingTop: "0",
                    paddingBottom: "0", // Adjust padding for the text input
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <span className={styles.input_inner_span}>$</span>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">USD</InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Payment Terms <span className={styles.red_span}>*</span>{" "}
              </span>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                name="paymentTerms"
                value={formik.values.paymentTerms}
                onChange={formik.handleChange}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    color: formik.values.paymentTerms ? "inherit" : "#a9a9a9",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
                  Select
                </MenuItem>
                {paymentTerms.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className={styles.double_div}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Invoice Due Date<span className={styles.red_span}>*</span>{" "}
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="invoiceDueDate"
                  type="date"
                  value={formik.values.invoiceDueDate || null}
                  onChange={(newValue) => {
                    formik.setFieldValue("invoiceDueDate", newValue); // Manually update Formik value
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                GL Post Date<span className={styles.red_span}>*</span>{" "}
              </span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name="glPostDate"
                  type="date"
                  value={formik.values.glPostDate || null}
                  onChange={(newValue) => {
                    formik.setFieldValue("glPostDate", newValue); // Manually update Formik value
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <span className={`${styles.span_label} bodyspan_16px_regular`}>
              {" "}
              Invoice Description <span className={styles.red_span}>
                *
              </span>{" "}
            </span>
            <TextField
              //   label="With normal TextField"
              name="invoiceDes"
              value={formik.values.invoiceDes}
              onChange={formik.handleChange}
              id="outlined-start-adornment"
            />
          </FormControl>
          <div className={styles.expenseddetails}>
            <h1 className="H1_Medium_20px_primary">Expense Details</h1>
            <div className={styles.toggle_section}>
              <h5>
                $ 0.00/
                <span className={styles.togglerspan}>
                  {toggler == 1 ? `$` : "%"} 0.00
                </span>
              </h5>
              <div className={styles.toggle}>
                <div
                  className={
                    toggler == 1
                      ? styles.selected_toggle
                      : styles.unselected_toggle
                  }
                  onClick={() => {
                    setToggler(1);
                  }}
                >
                  $
                </div>{" "}
                <div
                  className={
                    toggler == 2
                      ? styles.selected_toggle
                      : styles.unselected_toggle
                  }
                  onClick={() => {
                    setToggler(2);
                  }}
                >
                  %
                </div>
              </div>
            </div>
          </div>
          <div className={styles.double_div}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Line Amount <span className={styles.red_span}>*</span>{" "}
              </span>
              <TextField
                //   label="With normal TextField"
                id="outlined-start-adornment"
                name="lineAmount"
                type="number"
                placeholder="0.00"
                value={formik.values.lineAmount}
                onChange={formik.handleChange}
                sx={{
                  m: 1,
                  // width: '25ch',
                  "& .MuiInputAdornment-root": {
                    //   backgroundColor: '#f0f0f0', // Background for adornment
                    height: "100%", // Match the height of the input field
                    //   display: 'flex',
                    //   alignItems: 'center',
                    //   justifyContent: 'center',
                    //   padding: '0 8px',
                    borderRadius: "4px 0 0 4px", // Rounded corners on the left
                  },
                  "& .MuiInputBase-root": {
                    paddingLeft: "0",
                    paddingTop: "0",
                    paddingBottom: "0", // Adjust padding for the text input
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <span className={styles.input_inner_span}>$</span>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">USD</InputAdornment>
                    ),
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Department <span className={styles.red_span}>*</span>{" "}
              </span>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                name="department"
                value={formik.values.department}
                onChange={formik.handleChange}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    color: formik.values.department ? "inherit" : "#a9a9a9",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
                  Select Department
                </MenuItem>
                {departments.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className={styles.double_div}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Account <span className={styles.red_span}>*</span>{" "}
              </span>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                name="account"
                value={formik.values.account}
                onChange={formik.handleChange}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    color: formik.values.account ? "inherit" : "#a9a9a9",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
                  Select Account
                </MenuItem>
                {accounts.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <span className={`${styles.span_label} bodyspan_16px_regular`}>
                {" "}
                Location <span className={styles.red_span}>*</span>{" "}
              </span>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    color: formik.values.location ? "inherit" : "#a9a9a9",
                  },
                }}
                input={<BootstrapInput />}
              >
                <MenuItem value="" disabled sx={{ color: "#a9a9a9" }}>
                  Select Location
                </MenuItem>
                {locations.map((e) => {
                  return <MenuItem value={e}>{e}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <span className={`${styles.span_label} bodyspan_16px_regular`}>
              {" "}
              Description <span className={styles.red_span}>*</span>{" "}
            </span>
            <TextField
              //   label="With normal TextField"
              name="expensedes"
              value={formik.values.expensedes}
              onChange={formik.handleChange}
              id="outlined-start-adornment"
            />
          </FormControl>
          <div className={styles.addexpensecoding_button}>
            <Button
              sx={{
                color: "#0D0F11", // Text color
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid black",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <img src={plus_Icon} alt="icon" />
              Add Expense Coding
            </Button>
          </div>
          <div className={styles.formDetails_Container_heading}>
            <div className={styles.formDetails_Container_heading_img}>
              <img src={comment_icon} alt="icon" />
            </div>{" "}
            <h1 className="H1_Bold_24px_primary">Comments</h1>
          </div>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <TextField
              //   label="With normal TextField"
              name="comments"
              placeholder="Add a comment and use @Name to tag someone"
              value={formik.values.comments}
              onChange={formik.handleChange}
              id="outlined-start-adornment"
            />
          </FormControl>

          <div className={styles.footer}>
            <img src={verticaldot} alt="icon" />
            <Button
              sx={{
                color: "#0D0F11", // Text color
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid black",
                fontSize: "14px",
                fontWeight: "400",
              }}
              onClick={saveAsDraft}
            >
              Save as Draft
            </Button>
            <Button
              sx={{
                backgroundColor: "primary.main",
                color: "#FFFFFF", // Text color
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid black",
                fontSize: "14px",
                fontWeight: "400",
              }}
              type="submit"
            >
              Submit & New
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormDetails;
