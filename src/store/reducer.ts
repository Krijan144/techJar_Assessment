import { combineReducers } from "redux";
import appState from "./app/reducers";
import employeeState from "./employee/reducers";

const rootReducer = combineReducers({
  appState,
  employeeState,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
