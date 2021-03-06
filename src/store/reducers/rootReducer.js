import { combineReducers } from "redux";
import { userLoginReducer, userRegisterReducer } from "./userReducers";
import {
  adCreateReducer,
  adDeleteReducer,
  adDetailsReducer,
  adFilterReducer,
  adSearchReducer,
  adUpdateReducer,
  ad_ListReducer,
} from "./adReducers";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  adsList: ad_ListReducer,
  adDetails: adDetailsReducer,
  adSearch: adSearchReducer,
  adFilter: adFilterReducer,
  adDelete: adDeleteReducer,
  adCreate: adCreateReducer,
  adUpdate: adUpdateReducer,
});
export default reducer;
