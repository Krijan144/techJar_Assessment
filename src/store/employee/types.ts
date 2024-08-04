import {
  SET_IS_LOADING,
  SET_IS_SUBMITTING,
  SET_EMPLOYEE_DATA,
  SET_EMPLOYEES_DATA,
  SET_SEARCHED_EMPLOYEES_DATA,
  RESET_SEARCHED_EMPLOYEES_DATA,
  CREATE_EMPLOYEE_DATA,
  REMOVE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
  EMPLOYEES_IS_SUBMITTING,
} from "./action-types";

export interface EmployeeState {
  isLoading: boolean;
  isSubmitting: boolean;
  employee: any;
  employees: any;
  searchedEmployees: any;
}

export type SetIsLoadingType = {
  type: typeof SET_IS_LOADING;
  payload: boolean;
};

export type SetIsSubmittingType = {
  type: typeof SET_IS_SUBMITTING;
  payload: boolean;
};

export type SetEmployeeDataType = {
  type: typeof SET_EMPLOYEE_DATA;
  payload: any;
};

export type SetEmployeesDataType = {
  type: typeof SET_EMPLOYEES_DATA;
  payload: any;
};

export type SetSearchedEmployeesDataType = {
  type: typeof SET_SEARCHED_EMPLOYEES_DATA;
  payload: any;
};

export type ResetSearchedEmployeesDataType = {
  type: typeof RESET_SEARCHED_EMPLOYEES_DATA;
  payload: any;
};

export type CreateEmployeeDataType = {
  type: typeof CREATE_EMPLOYEE_DATA;
  payload: any;
};

export type RemoveEmployeeDataType = {
  type: typeof REMOVE_EMPLOYEE_DATA;
  payload: any;
};

export type UpdateEmployeeDataType = {
  type: typeof UPDATE_EMPLOYEE_DATA;
  payload: any;
};

export type EmployeesIsSubmitting = {
  type: typeof EMPLOYEES_IS_SUBMITTING;
  payload: any;
};

export type EmployeeActionTypes =
  | SetIsLoadingType
  | SetIsSubmittingType
  | SetEmployeeDataType
  | SetEmployeesDataType
  | SetSearchedEmployeesDataType
  | ResetSearchedEmployeesDataType
  | CreateEmployeeDataType
  | RemoveEmployeeDataType
  | UpdateEmployeeDataType
  | EmployeesIsSubmitting;
