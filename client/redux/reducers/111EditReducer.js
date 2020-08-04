// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  111: {}
};

// Reducer
export default function 111EditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_111_SUCCESS:
      return { ...state, 111: action.payload };
    case types.UPDATE_111_SUCCESS:
      return { ...state, 111: action.payload };
    case types.GET_111_SUCCESS:
      return { ...state, 111: action.payload };
     // END REDUCERS
    
    case types.RESET_111:
      state = initialState;
      return state;
    default:
      return state;
  }
}