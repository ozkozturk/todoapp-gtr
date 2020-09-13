import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CompletedTasksProps } from './types';
import StyledCompletedTasks, { StyledEmptyCompleted } from './styled';
import TaskItem from '../TaskItem';
import { InitialStateTypes } from '../../redux/initialState';

const CompletedTasks:FC<CompletedTasksProps> = () => {
  const todos = useSelector((state: InitialStateTypes) => state.todos);
  const isCompleted = todos.data.filter((todo) => todo.completed).map((todo) => (
    <TaskItem title={todo.title} key={todo.id} id={todo.id} completed={todo.completed} />
  ));
  return (
    <StyledCompletedTasks>
      <h2>Completed Tasks</h2>
      {
        isCompleted.length === 0
          ? <StyledEmptyCompleted>There is no completed task</StyledEmptyCompleted>
          : isCompleted
      }
    </StyledCompletedTasks>
  );
};

export default CompletedTasks;
