import api from './api';
import { GET_TASKS_PENDING, GET_TASKS_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_FULFILL } from './actionTypes';

export const getTasks = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_TASKS_PENDING,
    });
    return api.get('/').then((response) => {
      dispatch({
        type: GET_TASKS_SUCCESS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: GET_TASKS_FAILURE,
        error,
      });
    }).finally(() => {
      dispatch({
        type: GET_TASKS_FULFILL,
      });
    });
  };
};

export const updateTask = () => {};
