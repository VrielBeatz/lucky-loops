import React from 'react';
import './styles.scss';
import { Formik, Form, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import TextField from '../../Forms/TextField/TextField';
import AuthContainer from '../authContainer/authContainer';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
   const initialValues = {
      email: '',
      password: '',
   };
   const validationSchema = Yup.object().shape({
      email: Yup.string().email().required('required'),
      password: Yup.string().min(6).required(),
   });
   return (
      <div className='sign-in__wrapper'>
         <AuthContainer>
            <h2>Sign in</h2>
            <div className='login-by'>
               <Button className='button google-dark-btn'></Button>
               <Button>Facebook</Button>
            </div>
            <div className='or'>
               <span className='linner'></span>
               <h4 className='or-text'>or</h4>
               <span className='linner'></span>
            </div>
            <Formik validationSchema initialValues={initialValues}>
               {({ values }) => (
                  <Form>
                     <TextField name='email' type='email' label='Email' />
                     <TextField
                        name='password'
                        type='password'
                        label='Password'
                     />
                     <div className='submit'>
                        <Link to='/'>Forget Password</Link>
                        <Button type='submit'>Sign in</Button>
                     </div>
                  </Form>
               )}
            </Formik>
         </AuthContainer>
      </div>
   );
};

export default SignIn;
