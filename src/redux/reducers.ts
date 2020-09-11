import { combineReducers } from 'redux';
import { GET_TASKS_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_PENDING, GET_TASKS_FULFILL } from './actionTypes';
import initialState from './initialState';

type ActionTypes = {
  type: string;
  payload: any;
  error: any;
}

const todoReducer = (state = initialState.todos, action: ActionTypes) => {
  switch (action.type) {
    case GET_TASKS_PENDING:
      return { ...state, loading: true };
    case GET_TASKS_SUCCESS:
      return { ...state, data: [...action.payload.data.todos], status: 'success' };
    case GET_TASKS_FAILURE:
      return { ...state, error: action.error, status: 'success' };
    case GET_TASKS_FULFILL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todoReducer,
});
