import {
  ADD_TASK_ITEM, COMPLETE_TASK_ITEM,
  DELETE_TASK_ITEM, EDIT_TASK_ITEM,
} from './actions';
import initialState from './initialState';

const reducer:any = (state: any = initialState.todos, action:any) => {
  switch (action.type) {
    case ADD_TASK_ITEM:
      return action.payload;
    case DELETE_TASK_ITEM:
      return action.payload;
    case EDIT_TASK_ITEM:
      return action.payload;
    case COMPLETE_TASK_ITEM:
      return action.payload;
  }
  return state;
};

export default reducer;
