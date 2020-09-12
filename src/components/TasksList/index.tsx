import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TasksListProps } from './types';
import StyledTasksList from './styled';
import TaskItem from '../TaskItem';
import CompletedTasks from '../CompletedTasks';
import { getTasks } from '../../redux/actions';

const TasksList: FC<TasksListProps> = () => {
  const todos = useSelector((state: any) => state.todos.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <StyledTasksList>
      {
        todos.map((todo:any) => {
          return (<TaskItem title={todo.title} key={todo.id} id={todo.id} completed={false} />);
        })
      }
      <CompletedTasks />
    </StyledTasksList>
  );
};

export default TasksList;
