import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  RESET_NOTIFICATION_DATA,
  SET_IS_LOADING,
  SET_ME,
  SET_NOTIFICATION_DATA,
} from "./action-types";
import {
  ApplicationState,
  NotificationPayloadType,
  ResetNotificationDataType,
  SetIsLoadingType,
  SetMeType,
  SetNotificationDataType,
} from "./types";
import { network } from "../../network";
import { api } from "../../api";

export type AppThunk = ActionCreator<
  ThunkAction<Promise<boolean>, ApplicationState, null, Action<string>>
>;

export const setMe = (payload: any): SetMeType => ({
  type: SET_ME,
  payload,
});

export const setIsLoading = (payload: boolean): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  payload,
});

export const setNotification = (
  payload: NotificationPayloadType
): SetNotificationDataType => ({
  type: SET_NOTIFICATION_DATA,
  payload,
});

export const resetNotification = (): ResetNotificationDataType => ({
  type: RESET_NOTIFICATION_DATA,
});

export const setErrorMessage = (err: {
  response: { name: string; data: { message: string } };
}): SetNotificationDataType => {
  return {
    type: SET_NOTIFICATION_DATA,
    payload: {
      name: "Error",
      message: err?.error || "Error has occurred",
      level: "error",
    },
  };
};

export const logout = () => {
  sessionStorage.removeItem("token");
};

export const login = ({ values }: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const { status, data } = await network({
        dispatch,
      }).post(api.login, values);

      if (status === 200 || status > 200) {
        if (data) {
          const { token } = data;
          dispatch(setMe(data));
          sessionStorage.setItem("token", token);
          const redirectUrl = "/";
          window.location.href = redirectUrl;

          dispatch(setIsLoading(false));

          dispatch(
            setNotification({
              name: "Login",
              message: "Login Successful",
              level: "success",
            })
          );
          return true;
        }
        dispatch(setIsLoading(false));
      }
    } catch (error: any) {
      error.response && dispatch(setErrorMessage(error.response.data));
      dispatch(setIsLoading(false));
    }
  };
};
