import { combineReducers } from 'redux';
import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_PENDING,
  GET_TASKS_FULFILL,
  ADD_TASKS_PENDING,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILURE,
  ADD_TASKS_FULFILL,
  DELETE_TASKS_PENDING,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_FAILURE,
  DELETE_TASKS_FULFILL,
  UPDATE_TASKS_PENDING,
  UPDATE_TASKS_SUCCESS,
  UPDATE_TASKS_FAILURE,
  UPDATE_TASKS_FULFILL,
} from './actionTypes';
import initialState from './initialState';

type ActionTypes = {
  type: string;
  payload: any;
  error: any;
}

const todoReducer = (state = initialState.todos, action: ActionTypes) => {
  switch (action.type) {
    case GET_TASKS_PENDING:
    case ADD_TASKS_PENDING:
    case DELETE_TASKS_PENDING:
    case UPDATE_TASKS_PENDING:
      return { ...state, loading: true };
    case GET_TASKS_SUCCESS:
    case ADD_TASKS_SUCCESS:
    case DELETE_TASKS_SUCCESS:
    case UPDATE_TASKS_SUCCESS:
      return { ...state, data: [...action.payload.data.todos], status: 'success' };
    case GET_TASKS_FAILURE:
    case ADD_TASKS_FAILURE:
    case DELETE_TASKS_FAILURE:
    case UPDATE_TASKS_FAILURE:
      return { ...state, status: 'failure' };
    case GET_TASKS_FULFILL:
    case ADD_TASKS_FULFILL:
    case DELETE_TASKS_FULFILL:
    case UPDATE_TASKS_FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todoReducer,
});
