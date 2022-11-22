import { register } from '../../services/authService';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const RegisterForm = () => {
  const initialCredentials = {
    name:'',
    email:'',
    age: 16,
    password:'',
    katas:[],
    confirm:''
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
        age: Yup.number()
              .min(10, 'You must be over 10 years old')
              .required('Age is required'),
        password: Yup.string()
              .min(8, 'Password required minimum 8 characters')
              .required('Password is required'),
        confirm: Yup.string()
              .when("password", {
                is:(value: string) => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref("password")],'Password must match' )
              }),
        katas: Yup.string()
      }
  )
  return (
    <div>
      <Formik
          initialValues={initialCredentials}
          validationSchema={registerSchema}
          onSubmit={async(values) => {
            await register(values.name,values.email,values.password, values.age, values.katas)
            console.table(values)
          }}     
      >
        {
          ({values, errors, touched, isSubmitting }) => 
            (
            <Form>
              <label htmlFor='name '>Name: {' '}</label>
              <Field 
                  id='name'
                  type='text'
                  name='name'
                  placeholder='Enter a Name'
              />
              {
                errors.name && touched.name && (<ErrorMessage  name='name' component={'div'}></ErrorMessage>)
              }
              <br />
              <label htmlFor='email'>Email: {' '}</label>
              <Field 
                  id='email'
                  type='email'
                  name='email'
                  placeholder='exmple@example.com'
              />
              {
                errors.email && touched.email && (<ErrorMessage name='email' component={'div'}></ErrorMessage>)
              }
            <br />
            <label htmlFor='age'>Age: {' '}</label>
            <Field 
                id='age'
                type='number'
                name='age'
                placeholder='Enter your age'
            />
            {
                errors.age && touched.age && (<ErrorMessage name='age' component={'div'}></ErrorMessage>)
            }
            <br />
            <label htmlFor='password'>Password: {' '}</label>
            <Field 
                id='password'
                type='password'
                name='password'
                placeholder='Enter your password'
            />
            {
                errors.password && touched.password && (<ErrorMessage name='password' component={'div'}></ErrorMessage>)
            }
          <br />
            <label htmlFor='confirm'>Confirm Password: {' '}</label>
            <Field 
                id='confirm'
                type='password'
                name='confirm'
                placeholder='Enter your confirm password'
            />
            {
                errors.confirm && touched.confirm && (<ErrorMessage name='confirm' component='div'></ErrorMessage>)
            }
            <br />
            <label htmlFor='katas'>Katas: {' '}</label>
            <Field 
                id='katas'
                type='array'
                name='katas'
                placeholder='Enter your kata Id'
            />
            {
                errors.katas && touched.katas && (<ErrorMessage name='katas' component='div'></ErrorMessage>)
            }
            <br/>
            <button type='submit'>Register</button>

            {
                isSubmitting ? (<p>User Register Successfully...</p>) :null 
            }                         
            </Form>
            )
          } 
      </Formik>
    </div>
  )
}

export default RegisterForm;