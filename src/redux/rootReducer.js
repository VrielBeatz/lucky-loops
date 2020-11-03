import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import loopsReducer from './loops/loops.reducer';

export default combineReducers({
   user: userReducer,
   loopsData: loopsReducer,
});
