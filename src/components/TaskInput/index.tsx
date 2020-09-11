import React, { FC } from 'react';
import { TaskInputProps } from './types';
import StyledTaskInput from './styled';

const TaskInput: FC<TaskInputProps> = () => {
  return (
    <StyledTaskInput>
      <h2>Task Input</h2>
    </StyledTaskInput>
  );
};

export default TaskInput;
