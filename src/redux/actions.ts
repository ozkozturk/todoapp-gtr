export const ADD_TASK_ITEM = 'ADD_TASK_ITEM';
export const DELETE_TASK_ITEM = 'DELETE_TASK_ITEM';
export const EDIT_TASK_ITEM = 'EDIT_TASK_ITEM';
export const COMPLETE_TASK_ITEM = 'COMPLETE_TASK_ITEM';

export const addTask = (taskItem:any) => {
  return {
    type: ADD_TASK_ITEM,
    payload: taskItem,
  };
};

export const deleteTask = (id: any) => {
  return {
    type: DELETE_TASK_ITEM,
    payload: id,
  };
};

export const editTask = (taskItem: any) => {
  return {
    type: EDIT_TASK_ITEM,
    payload: taskItem,
  };
};

export const completeTask = (taskItem: any) => {
  return {
    type: COMPLETE_TASK_ITEM,
    payload: taskItem,
  };
};
