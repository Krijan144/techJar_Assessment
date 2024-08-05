import { Reducer } from "redux";

import {
  RESET_NOTIFICATION_DATA,
  SET_IS_LOADING,
  SET_ME,
  SET_NOTIFICATION_DATA,
} from "./action-types";
import { ApplicationActionTypes, ApplicationState } from "./types";

export const initialState: ApplicationState = {
  token: "",
  isLoading: false,
  notification: [],
  me: undefined,
};

const reducer: Reducer<ApplicationState> = (
  state: ApplicationState = initialState,
  action: ApplicationActionTypes
): ApplicationState => {
  const { notification } = state;

  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case SET_NOTIFICATION_DATA: {
      return {
        ...state,
        notification: [action.payload],
        isLoading: false,
      };
    }
    case RESET_NOTIFICATION_DATA: {
      return {
        ...state,
        notification: [],
        isLoading: false,
      };
    }
    case SET_ME: {
      return { ...state, me: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
