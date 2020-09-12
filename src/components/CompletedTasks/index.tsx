import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CompletedTasksProps } from './types';
import StyledCompletedTasks from './styled';
import TaskItem from '../TaskItem';
import { InitialStateTypes } from '../../redux/initialState';

const CompletedTasks:FC<CompletedTasksProps> = () => {
  const todos = useSelector((state: InitialStateTypes) => state.todos);

  return (
    <StyledCompletedTasks>
      <h1>Completed Tasks</h1>
      {
        todos.data.filter((todo) => todo.completed).map((todo) => (
          <TaskItem title={todo.title} key={todo.id} id={todo.id} completed={todo.completed} />
        ))
      }
    </StyledCompletedTasks>
  );
};

export default CompletedTasks;
