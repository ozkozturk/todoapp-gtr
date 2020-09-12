import api from './api';
import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_FULFILL,
  ADD_TASKS_PENDING,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILURE,
  ADD_TASKS_FULFILL,
  UPDATE_TASKS_PENDING,
  UPDATE_TASKS_SUCCESS,
  UPDATE_TASKS_FAILURE,
  UPDATE_TASKS_FULFILL,
  DELETE_TASKS_PENDING,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_FAILURE,
  DELETE_TASKS_FULFILL,
} from './actionTypes';

type UpdateTypes = {
  id: number;
  title: string;
  completed: boolean;
}

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

export const addTask = (title: string) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_TASKS_PENDING,
    });
    return api.post('/create', { title }).then((response) => {
      dispatch({
        type: ADD_TASKS_SUCCESS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: ADD_TASKS_FAILURE,
        error,
      });
    }).finally(() => {
      dispatch({
        type: ADD_TASKS_FULFILL,
      });
    });
  };
};

export const updateTask = ({ id, title, completed }: UpdateTypes) => {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_TASKS_PENDING,
    });
    return api.post('/update', { id, title, completed }).then((response) => {
      dispatch({
        type: UPDATE_TASKS_SUCCESS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: UPDATE_TASKS_FAILURE,
        error,
      });
    }).finally(() => {
      dispatch({
        type: UPDATE_TASKS_FULFILL,
      });
    });
  };
};
export const deleteTask = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: DELETE_TASKS_PENDING,
    });
    return api.post('/delete', { id }).then((response) => {
      dispatch({
        type: DELETE_TASKS_SUCCESS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: DELETE_TASKS_FAILURE,
        error,
      });
    }).finally(() => {
      dispatch({
        type: DELETE_TASKS_FULFILL,
      });
    });
  };
};
