import React, { FC } from 'react';
import { CompletedTasksProps } from './types';
import StyledCompletedTasks from './styled';
import TaskItem from '../TaskItem';

const CompletedTasks:FC<CompletedTasksProps> = () => {
  return (
    <StyledCompletedTasks>
      <h1>Completed Tasks</h1>
      <TaskItem />
    </StyledCompletedTasks>
  );
};

export default CompletedTasks;
