import userTypes from './user.types';
import { auth } from '../../firebase/firebaseUtils';

const { SET_CURRENT_USER, SIGN_IN_ERRORS, SIGN_IN_SUCCESS } = userTypes;

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
