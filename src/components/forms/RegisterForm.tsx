import { register } from '../../services/authService';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, TextField } from '@mui/material';



const RegisterForm = () => {
  const navigate = useNavigate()
  const initialCredentials = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    age: 16,
    katas: [],
  }

  //yup validation schema
  const registerSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(6, 'Name must have minimun 6 characters')
        .max(12, 'Name must have maximun 12 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password required minimum 8 characters')
        .required('Password is required'),
      confirm: Yup.string()
        .when("password", {
          is: (value: string) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref("password")], 'Password must match')
        }),
      age: Yup.number()
        .min(13, 'You must be over 13 years old')
        .required('Age is required'),
      katas: Yup.string()
    }
  )
  return (
    <Box>
      <Formik
        initialValues={initialCredentials}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          try{
            const { data }= await register(values.name, values.email, values.password, values.age, values.katas)
            alert('User register Succesfully')
            console.table(data)
            navigate('/login')

          }catch(error){
            console.log(error)
            alert('You can not register')
          }
        }}
      >
        {
          ({ values, errors, touched, isSubmitting }) =>
          (
            <Form>
              <Box sx={{ m: 3}}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      id='name'
                      name='name'
                      component={TextField}
                      label="Name"
                      fullWidth
                      placeholder='Enter a Name'
                      required

                    />
                    {
                      errors.name && touched.name && (
                      <ErrorMessage name='name'>
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      id="email"
                      name="email"
                      component={TextField}
                      label="Email"
                      fullWidth
                      placeholder="Email Address"
                      required
                      autoFocus
                      
                    />
                    {
                      errors.email && touched.email && (
                      <ErrorMessage name='email'>
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      component={TextField}
                      fullWidth
                      label="Password"
                      placeholder='Enter your password'
                      required
                      
                    />
                    {
                      errors.password && touched.password && (
                      <ErrorMessage name="password">
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      id='confirm'
                      type='password'
                      name='confirm'
                      component={TextField}
                      label="Confirm Password"
                      fullWidth
                      
                    />
                    {
                      errors.confirm && touched.confirm && (
                      <ErrorMessage name='confirm'>
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      id='age'
                      type='number'
                      name='age'
                      component={TextField}
                      fullWidth
                      label="Age"
                      InputProps={{ inputProps: { min: 10, max: 99 } }}
                      placeholder='Enter your age'
                      required
                    />
                    {
                      errors.age && touched.age && (
                      <ErrorMessage name='age'>
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      id='katas'
                      type='array'
                      name='katas'
                      label="Kata"
                      placeholder='Enter your kata'
                      component={TextField}           
                      fullWidth
                      
                    />
                    {
                      errors.katas && touched.katas && (
                      <ErrorMessage name='katas'>
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                      </ErrorMessage>
                      )
                    }
                  </Grid>
                </Grid>
                <Button sx={{ mt: 3, mb: 2 }} variant='contained' type='submit'>Register</Button>

                {
                  isSubmitting ? (<p>User Register Successfully...</p>) : null
                }

              </Box>
            </Form>
          )
        }
      </Formik>
    </Box>
  )
}

export default RegisterForm;