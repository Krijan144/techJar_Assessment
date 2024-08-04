import { Reducer } from "redux";

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
} from "./action-types";

import { EmployeeActionTypes, EmployeeState } from "./types";

import { deleteData, updateData } from "../../utils";

export const initialState: EmployeeState = {
  isLoading: false,
  isSubmitting: false,

  employee: undefined,
  employees: [],

  searchedEmployees: [],
};

const reducer: Reducer<EmployeeState> = (
  state: EmployeeState = initialState,
  action: EmployeeActionTypes
): EmployeeState => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_IS_SUBMITTING:
      return { ...state, isSubmitting: action.payload };

    case SET_EMPLOYEE_DATA:
      return { ...state, employee: action.payload };

    case SET_EMPLOYEES_DATA:
      return { ...state, employees: action.payload };

    case SET_SEARCHED_EMPLOYEES_DATA:
      return { ...state, searchedEmployees: action.payload };

    case RESET_SEARCHED_EMPLOYEES_DATA:
      return { ...state, searchedEmployees: undefined };

    // Merge action.payload with the existing data at the top of the array

    case CREATE_EMPLOYEE_DATA:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };

    case UPDATE_EMPLOYEE_DATA:
      return {
        ...state,
        employees: updateData(state.employees, action),
      };

    case REMOVE_EMPLOYEE_DATA:
      return {
        ...state,
        employees: deleteData(state.employees, action),
      };

    default:
      return state;
  }
};

export default reducer;
