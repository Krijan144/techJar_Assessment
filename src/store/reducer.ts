import { combineReducers } from "redux";
import appState from "./app/reducers";
const rootReducer = combineReducers({
  appState,
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
