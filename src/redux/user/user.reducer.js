import userTypes from './user.types';

const INITIAL_STATE = {
   test: 'test',
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default userReducer;
