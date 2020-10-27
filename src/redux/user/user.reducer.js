import userTypes from './user.types';

const {
   SET_CURRENT_USER,
   SIGN_IN_SUCCESS,
   SIGN_IN_ERRORS,
   SIGN_UP_SUCCESS,
   SIGN_UP_ERRORS,
} = userTypes;

const INITIAL_STATE = {
   currentUser: null,
   signInSuccess: false,
   signInErrors: [],
   signUpSuccess: false,
   signUpErrors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            currentUser: action.payload,
         };
      case SIGN_IN_SUCCESS:
         return {
            ...state,
            signInSuccess: action.payload,
         };
      case SIGN_IN_ERRORS:
         return {
            ...state,
            signInErrors: action.payload,
         };
      case SIGN_UP_SUCCESS:
         return {
            ...state,
            signUpSuccess: action.payload,
         };
      case SIGN_UP_ERRORS:
         return {
            ...state,
            signUpErrors: action.payload,
         };
      default:
         return state;
   }
};

export default userReducer;
