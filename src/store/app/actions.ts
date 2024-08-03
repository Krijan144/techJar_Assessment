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

export const setMe = (payload): SetMeType => ({
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
      name: (err && err.response && err.response.name) || "Error",
      message: "Error has occurred",
      level: "error",
    },
  };
};

export const logout = () => {
  sessionStorage.removeItem("token");
  window.localStorage.setItem("logout", Date.now().toString());

  // window.location.href = '/login';
};

// export const fetchMe: AppThunk =
//   () =>
//   async (dispatch: Dispatch): Promise<boolean> => {
//     try {
//       dispatch(setIsLoading(true));

//       const { data, status } = await network({ dispatch }).get(api.me);
//       if (status === 200) {
//         if (data) {
//           dispatch(setMe({ ...data }));
//           dispatch(setIsLoading(false));
//         }
//         return true;
//       }
//       return false;
//     } catch (error) {
//       dispatch(setErrorMessage(error));
//       return false;
//     }
//   };

export const login = ({ values }: any) => {
  return async (dispatch: Dispatch) => {
    console.log(values, "innn");

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
              message: data.message,
              level: "success",
            })
          );
          return true;
        }
        dispatch(setIsLoading(false));
        dispatch(
          setNotification({
            name: "Error",
            message: data,
            level: "error",
          })
        );
      }
    } catch (error) {
      error.response && dispatch(setErrorMessage(error));
      dispatch(setIsLoading(false));
    }
  };
};
