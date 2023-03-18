import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  DialogTitle,
  RadioGroup,
  styled,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Navigate } from 'react-router-dom';
const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const Form = () => {
  const [state, setState] = useState({ date: new Date() });
  const [classs, setClasss] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/class`);
        setClasss(res.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      phone,
      address,
      password,
      phone,
      address,
    };
    try {
      await axios.post('http://localhost:5000/api/userrs/register', userData);

      Navigate('/dashboard/default');
    } catch (err) {}
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    phone,
    address,
    gender,
    date,
    email,
  } = state;

  return (
    <div>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Form' }]} />
        </Box>

        <Stack spacing={3}>
          <SimpleCard title="Simple Form">
            <DialogTitle id="form-dialog-title"> Add new Student</DialogTitle>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    name="username"
                    id="standard-basic"
                    value="name"
                    onChange={handleChange}
                    errorMessages={['this field is required']}
                    label="Student Full Name"
                  />
                  <TextField
                    type="text"
                    name="class"
                    id="standard-basic"
                    value="class"
                    onChange={handleChange}
                    errorMessages={['this field is required']}
                    label="Class"
                  />
                  <select>
                    <option selected="true" disabled="disabled">
                      Class
                    </option>
                    {classs &&
                      classs.map((item) => (
                        <option className="yo" name="class">
                          {item.name}
                        </option>
                      ))}
                  </select>
                  <TextField
                    type="text"
                    name="id_no"
                    id="standard-basic"
                    value="no"
                    onChange={handleChange}
                    errorMessages={['this field is required']}
                    label="Id No"
                  />

                  <TextField
                    type="text"
                    name="address"
                    label="Address"
                    onChange={handleChange}
                    value="address"
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />

                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value="email"
                    onChange={handleChange}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={date}
                      onChange={handleDateChange}
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          label="Birth Day"
                          id="mui-pickers-date"
                          sx={{ mb: 2, width: '100%' }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    name="mobile"
                    value="phone"
                    label="Mobile Number"
                    onChange={handleChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  <TextField
                    name="password"
                    type="password"
                    label="Password"
                    value={password || ''}
                    onChange={handleChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />{' '}
                  <RadioGroup
                    row
                    name="gender"
                    sx={{ mb: 2 }}
                    value={gender || ''}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Male"
                      label="Male"
                      labelPlacement="end"
                      control={<Radio color="secondary" />}
                    />

                    <FormControlLabel
                      value="Female"
                      label="Female"
                      labelPlacement="end"
                      control={<Radio color="secondary" />}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>
    </div>
  );
};

export default Form;
