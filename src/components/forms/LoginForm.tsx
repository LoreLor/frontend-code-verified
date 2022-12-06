import { Box, Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { login } from '../../services/authService';




// define component
const LoginForm = () => {
    const navigate = useNavigate();

    const initialCredentials = {
        email: '',
        password: ''
    }
    // define schema validation with yup
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid Email Format').required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    );

    return (
        <Box>
            <Formik
                /**  config formik */
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    // await new Promise((res) => setTimeout(res,1000))
                    try {
                        const { data } = await login(values.email, values.password)
                        alert(JSON.stringify(values, null, 2))
                        console.table(values)
                        sessionStorage.setItem('sessionJWT', data.res.token)
                        navigate("/")

                    } catch (error) {
                        console.log(error)
                        alert('Check your data')
                    }
                }}
            >

                {/* config de valores a inyectar en el formulario */}
                {
                    ({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleSubmit,
                        handleChange,
                        handleBlur }) => (
                        <Form >
                            <Box sx={{
                                mt: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width:'100%'
                            }}
                            >
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    component={TextField}
                                    fullWidth
                                    placeholder="Email Address"
                                    required
                                    autoFocus
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />

                                {/* Email Errors */}
                                {
                                    errors.email && touched.email && (<ErrorMessage name='email' component='div'></ErrorMessage>)
                                }
                                <br />
                                {/* password */}

                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    component={TextField}
                                    fullWidth
                                    required
                                    placeholder='Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />

                                {/* Password Errors */}
                                {
                                    errors.password && touched.password && (<ErrorMessage name='password' component='div'></ErrorMessage>)
                                }

                                {/* sumit form */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                                </Button>

                                {/* message if the form submit */}
                                {
                                    isSubmitting ? (<p>Checking credentiasl...</p>) : null
                                }
                                <br />
                            </Box>
                        </Form>
                    )
                }
            </Formik>
        </Box>
    )
}

export default LoginForm;