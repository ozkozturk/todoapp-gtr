import React, { FC } from 'react';
import { TaskInputProps } from './types';
import StyledTaskInput from './styled';

const TaskInput: FC<TaskInputProps> = () => {
  return (
    <StyledTaskInput>
      <form action="">
        <input type="text" value="enter task" />
        <button type="submit">add</button>
      </form>
    </StyledTaskInput>
  );
};

export default TaskInput;
