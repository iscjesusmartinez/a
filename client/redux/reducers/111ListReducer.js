// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function 111ListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_111_SUCCESS:
      return { ...state, 111: action.payload };
    case types.LIST_111_SUCCESS:
      return { ...state, list111: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}