import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_EMPLOYEE_DATA,
  SET_EMPLOYEES_DATA,
  SET_EMPLOYEES_METADATA,
  SET_SEARCHED_EMPLOYEES_DATA,
  RESET_SEARCHED_EMPLOYEES_DATA,
  CREATE_EMPLOYEE_DATA,
  REMOVE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "./action-types";

import {
  EmployeeState,
  SetIsLoadingType,
  SetIsSubmittingType,
  SetEmployeeDataType,
  SetEmployeesDataType,
  SetSearchedEmployeesDataType,
  ResetSearchedEmployeesDataType,
  CreateEmployeeDataType,
  RemoveEmployeeDataType,
  UpdateEmployeeDataType,
} from "./types";

export type AppThunk = ActionCreator<
  ThunkAction<Promise<boolean>, EmployeeState, null, Action<string>>
>;

export const setIsLoading = (payload: any): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  payload,
});

export const setIsSubmitting = (payload: any): SetIsSubmittingType => ({
  type: SET_IS_SUBMITTING,
  payload,
});

export const setEmployeeData = (payload: any): SetEmployeeDataType => ({
  type: SET_EMPLOYEE_DATA,
  payload,
});

export const setEmployeesData = (payload: any): SetEmployeesDataType => ({
  type: SET_EMPLOYEES_DATA,
  payload,
});

export const setSearchedEmployeesData = (
  payload: any
): SetSearchedEmployeesDataType => ({
  type: SET_SEARCHED_EMPLOYEES_DATA,
  payload,
});

export const resetSearchedEmployeesData = (
  payload: any
): ResetSearchedEmployeesDataType => ({
  type: RESET_SEARCHED_EMPLOYEES_DATA,
  payload,
});

export const createEmployeeData = (payload: any): CreateEmployeeDataType => ({
  type: CREATE_EMPLOYEE_DATA,
  payload,
});

export const removeEmployeeData = (payload: any): RemoveEmployeeDataType => ({
  type: REMOVE_EMPLOYEE_DATA,
  payload,
});

export const updateEmployeeData = (payload: any): UpdateEmployeeDataType => ({
  type: UPDATE_EMPLOYEE_DATA,
  payload,
});

export const fetchEmployees =
  ({ data }: any) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      dispatch(setEmployeesData(data));
      dispatch(setIsLoading(false));

      return false;
    } catch (error) {
      console.log(error);

      dispatch(setIsLoading(false));
      return false;
    }
  };

export const createEmployee =
  ({ data }: any) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      dispatch(createEmployeeData(data));
      dispatch(setIsLoading(false));

      return false;
    } catch (error) {
      console.log(error);

      dispatch(setIsLoading(false));
      return false;
    }
  };
export const updateEmployee =
  ({ data }: any) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      dispatch(updateEmployeeData(data));
      dispatch(setIsLoading(false));

      return false;
    } catch (error) {
      console.log(error);

      dispatch(setIsLoading(false));
      return false;
    }
  };
export const deleteEmployee =
  ({ data }: any) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setIsLoading(true));

      dispatch(removeEmployeeData(data));
      dispatch(setIsLoading(false));

      return false;
    } catch (error) {
      console.log(error);

      dispatch(setIsLoading(false));
      return false;
    }
  };
