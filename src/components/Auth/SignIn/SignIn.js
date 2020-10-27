import React, { useEffect } from 'react';
import './styles.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../../Forms/TextField/TextField';
import AuthContainer from '../authContainer/authContainer';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';
import { signInUser } from '../../../redux/user/user.actions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const mapState = ({ user }) => ({
   errors: user.signInErrors,
   currentUser: user.currentUser,
});

const SignIn = () => {
   const { errors, currentUser } = useSelector(mapState);
   const dispatch = useDispatch();
   const history = useHistory();
   const initialValues = {
      email: '',
      password: '',
   };
   const validationSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(30).required(),
   });

   const handleSignIn = ({ email, password }) => {
      dispatch(signInUser({ email, password }));
   };

   useEffect(() => {
      if (currentUser) {
         history.push('/');
      }
   }, [currentUser]);
   return (
      <AuthContainer>
         <h2>Login</h2>
         {errors}
         <div className='login-by'>
            <Button className='button google-dark-btn'></Button>
            <Button>Facebook</Button>
         </div>
         <div className='or'>
            <span className='linner'></span>
            <h4 className='or-text'>or</h4>
            <span className='linner'></span>
         </div>
         <Formik
            onSubmit={handleSignIn}
            validationSchema={validationSchema}
            initialValues={initialValues}
         >
            {({ values }) => (
               <Form>
                  <TextField name='email' type='email' label='Email' />
                  <TextField name='password' type='password' label='Password' />
                  <div className='submit'>
                     <Link to='/'>Forget password?</Link>
                     <Button type='submit'>Login</Button>
                  </div>
               </Form>
            )}
         </Formik>
      </AuthContainer>
   );
};

export default SignIn;
