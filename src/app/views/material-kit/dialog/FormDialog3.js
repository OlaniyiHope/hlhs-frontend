import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Navigate, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import React from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";
import { useEffect, useState } from "react";
const initialState = {
  student_name: "",
  classname: "",
  address: "",
  parents_name: "",
  contact_no: "",
  gender: "",
  age: "",
  email: "",
  password: "",
};
export default function FormDialog3() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState({ date: new Date() });
  const [formData, setformData] = useState(initialState);
  const {
    teachers_name,
    classname,
    address,
    parents_name,
    contact_no,
    gender,
    age,
    email,
    password,
  } = formData;
  const [classs, setClasss] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      teachers_name,
      classname,
      address,
      parents_name,
      contact_no,
      gender,
      age,
      email,
      password,
    };
    try {
      await axios.post(
        "https://hlhs.herokuapp.com/api/userrs/register",
        formData
      );

      navigate("/dashboard/default");
    } catch (err) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Teacher
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Add new teacher</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            value={teachers_name}
            placeholder="Enter teachers name"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            type="text"
            name="address"
            autoFocus
            margin="dense"
            onChange={handleChange}
            value={address}
            placeholder="Enter  address"
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="gender"
            placeholder="Gender"
            value={gender}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required", "email is not valid"]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="contact_no"
            value={contact_no}
            placeholder="Enter your phone number"
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
            validators={["required"]}
            errorMessages={["this field is required"]}
            fullWidth
          />{" "}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Teacher
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
