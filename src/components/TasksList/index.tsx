import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TasksListProps } from './types';
import StyledTasksList from './styled';
import TaskItem from '../TaskItem';
import CompletedTasks from '../CompletedTasks';
import { getTasks } from '../../redux/actions';
import { InitialStateTypes } from '../../redux/initialState';

const TasksList: FC<TasksListProps> = () => {
  const todos = useSelector((state: InitialStateTypes) => state.todos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <StyledTasksList>
      {
        todos.data.filter((todo) => !todo.completed).map((todo) => (
          <TaskItem title={todo.title} key={todo.id} id={todo.id} completed={todo.completed} />
        ))
      }
      <CompletedTasks />
    </StyledTasksList>
  );
};

export default TasksList;
