import userTypes from './user.types';
import { auth, firestore } from '../../firebase/firebaseUtils';

const {
   SET_CURRENT_USER,
   SIGN_IN_ERRORS,
   SIGN_IN_SUCCESS,
   SIGN_UP_SUCCESS,
   SIGN_UP_ERRORS,
} = userTypes;

export const setCurrentUser = (user) => ({
   type: SET_CURRENT_USER,
   payload: user,
});

export const signInSuccess = (payload) => ({
   type: SIGN_IN_SUCCESS,
   payload: payload,
});

export const signInErrors = (errors) => ({
   type: SIGN_IN_ERRORS,
   payload: errors,
});

export const signInUser = ({ email, password }) => async (dispatch) => {
   try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(signInSuccess(true));
      dispatch(signInErrors([]));
   } catch (errors) {
      dispatch(signInErrors([errors.message]));
   }
};

export const signUpSuccess = (payload) => ({
   type: SIGN_UP_SUCCESS,
   payload: payload,
});
export const signUpErrors = (errors) => ({
   type: SIGN_UP_ERRORS,
   payload: errors,
});

export const signUpUser = ({ email, password, username }) => async (
   dispatch
) => {
   try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      await firestore.collection('users').doc(res.user.uid).set({
         username: username,
         email: email,
      });
      dispatch(signUpSuccess(true));
   } catch (errors) {
      dispatch(signUpErrors([errors.message]));
   }
};
