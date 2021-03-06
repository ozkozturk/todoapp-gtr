import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import StyledTaskInput from './styled';
import { addTask } from '../../redux/actions';
import Icon from '../Icon';

const TaskInput: FC = ({ ...rest }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setTask('');
  };
  return (
    <StyledTaskInput {...rest}>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          type="submit"
          onClick={() => task.length > 0 && dispatch(addTask(task))}
        >
          <Icon>plus</Icon>
          Add
        </button>
      </form>
    </StyledTaskInput>
  );
};

export default TaskInput;
