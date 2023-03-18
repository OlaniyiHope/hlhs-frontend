import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function FormDialog6() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new Exam
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Add new Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Admin</DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Name" type="email" fullWidth />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email/Username"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="email"
            fullWidth
          />
          <TextField autoFocus margin="dense" id="phone" label="Phone" type="email" fullWidth />
          <TextField autoFocus margin="dense" id="address" label="Address" type="email" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Admin
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
