import React, { useEffect } from 'react';
import './styles.scss';
import { Formik, Form, Field } from 'formik';
import AuthContainer from '../authContainer/authContainer';
import TextField from '../../Forms/TextField/TextField';
import Button from '../../Button/Button';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../../redux/user/user.actions';
import { useHistory } from 'react-router-dom';

const mapState = ({ user }) => ({
   currentuser: user.currentUser,
});

const SignUp = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const { currentuser } = useSelector(mapState);
   const initialValues = {
      username: '',
      email: '',
      password: '',
   };
   const validationSchema = Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(30).required(),
   });
   const handleSignUp = ({ username, email, password }) => {
      console.log('work');
      dispatch(signUpUser({ username, email, password }));
   };
   useEffect(() => {
      if (currentuser) {
         history.push('/');
      }
   }, [currentuser]);
   return (
      <AuthContainer>
         <h2>Register your account</h2>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
         >
            {() => (
               <Form>
                  <TextField name='username' type='text' label='User Name' />
                  <TextField name='email' type='email' label='Email Address' />
                  <TextField name='password' type='password' label='Password' />
                  <Button type='submit'>Register</Button>
               </Form>
            )}
         </Formik>
      </AuthContainer>
   );
};

export default SignUp;
