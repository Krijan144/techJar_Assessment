import {
  SET_IS_LOADING,
  SET_NOTIFICATION_DATA,
  RESET_NOTIFICATION_DATA,
  SET_ME,
} from "./action-types";

export type NotificationPayloadType = {
  name: string;
  message: string;
  level: string;
};

export interface ApplicationState {
  token: string;
  isLoading: boolean;
  notification: NotificationPayloadType[];
  me: any;
}

export type SetIsLoadingType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type SetNotificationDataType = {
  type: typeof SET_NOTIFICATION_DATA;
  payload: NotificationPayloadType;
};

export type ResetNotificationDataType = {
  type: typeof RESET_NOTIFICATION_DATA;
};

export type SetMeType = {
  type: typeof SET_ME;
  payload: object;
};

export type ApplicationActionTypes =
  | SetIsLoadingType
  | SetNotificationDataType
  | ResetNotificationDataType
  | SetMeType;
