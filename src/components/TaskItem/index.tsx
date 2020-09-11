import React, { FC } from 'react';
import { TaskItemProps } from './types';
import StyledTaskItem from './styled';

const TaskItem: FC<TaskItemProps> = () => {
  return (
    <StyledTaskItem>
      <h2>Task Item</h2>
    </StyledTaskItem>
  );
};

export default TaskItem;
