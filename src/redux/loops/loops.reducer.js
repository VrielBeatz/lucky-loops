import loopsTypes from './loops.types';

const { FETCH_LOOPS } = loopsTypes;

const INITIAL_STATE = {
   loops: [],
};

const loopsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_LOOPS:
         return {
            ...state,
            loops: action.payload,
         };
      default:
         return state;
   }
};

export default loopsReducer;
