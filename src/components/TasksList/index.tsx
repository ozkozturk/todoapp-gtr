import React, { FC } from 'react';
import { TasksListProps } from './types';
import StyledTasksList from './styled';
import TaskItem from '../TaskItem';
import CompletedTasks from '../CompletedTasks';

const TasksList: FC<TasksListProps> = () => {
  return (
    <StyledTasksList>
      <TaskItem title="text" id={1} />
      <TaskItem title="text" id={2} />
      <CompletedTasks />
    </StyledTasksList>
  );
};

export default TasksList;
