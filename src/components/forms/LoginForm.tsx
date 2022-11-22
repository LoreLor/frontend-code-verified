import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { login } from '../../services/authService';




// define component
const LoginForm = () => {
    const navigate = useNavigate();

    const initialCredentials = {
        email:'',
        password:''
    }
    // define schema validation with yup
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid Email Format').required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    );
    
    return (
    <div>
        <Formik
            /**  config formik */
            initialValues = {initialCredentials}
            validationSchema = {loginSchema}
            onSubmit = {async(values) => {
                // await new Promise((res) => setTimeout(res,1000))
                const {data} = await login(values.email, values.password)
                        alert(JSON.stringify(values, null, 2))
                        console.table(values)
                        sessionStorage.setItem('sessionJWT',data.res.token)
                        navigate('/')
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
                    handleBlur}) => (
                        <Form>
                            {/* email */}
                            <label htmlFor='email'>Email: {' '}</label>
                            <Field
                                id='email'
                                type='email'
                                name='email'
                                placeholder='example@email.com'
                            />

                                {/* Email Errors */}
                            {
                                errors.email && touched.email && (<ErrorMessage name='email' component='div'></ErrorMessage>)
                            }
                            <br />
                            {/* password */}
                            <label htmlFor='password'>Password: {' '}</label>
                            <Field
                                id='password'
                                type='password'
                                name='password'
                                placeholder='password'
                            />

                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (<ErrorMessage name='password' component='div'></ErrorMessage>)
                            }

                            {/* sumit form */}
                            <div>
                                <button type='submit'>Login</button>
                            </div>

                            {/* message if the form submit */}
                            {
                                isSubmitting ? (<p>Checking credentiasl...</p>) : null 
                            }
                    </Form>
                )
            }
        </Formik>
    </div>
    )
}

export default LoginForm;