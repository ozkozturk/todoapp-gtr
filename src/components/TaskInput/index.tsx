import React, { FC, useState } from 'react';
import { TaskInputProps } from './types';
import StyledTaskInput from './styled';

const TaskInput: FC<TaskInputProps> = () => {
  const [task, setTask] = useState('');
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setTask('');
  };
  return (
    <StyledTaskInput>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </StyledTaskInput>
  );
};

export default TaskInput;
