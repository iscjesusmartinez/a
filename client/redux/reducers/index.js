import { combineReducers } from "redux";

// START IMPORT REDUCERS
import 111EditReducer from "./111EditReducer";
import 111ListReducer from "./111ListReducer";
import HomeReducer from "./HomeReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	111EditReducer,
	111ListReducer,
	HomeReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
