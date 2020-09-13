import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StyledTasksList from './styled';
import TaskItem from '../TaskItem';
import Loader from '../Loader';
import CompletedTasks from '../CompletedTasks';
import { getTasks } from '../../redux/actions';
import { InitialStateTypes } from '../../redux/initialState';
import { StyledEmptyCompleted } from '../CompletedTasks/styled';

const TasksList: FC = () => {
  const todos = useSelector((state: InitialStateTypes) => state.todos);
  const haveTask = todos.data.filter((todo) => !todo.completed).map((todo) => (
    <TaskItem title={todo.title} key={todo.id} id={todo.id} completed={todo.completed} />
  ));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (todos.loading) {
    return <Loader />;
  }

  return (
    <StyledTasksList>
      <h2>Tasks</h2>
      {
        haveTask.length === 0
          ? <StyledEmptyCompleted>There is no task</StyledEmptyCompleted>
          : haveTask
      }
      <CompletedTasks />
    </StyledTasksList>
  );
};

export default TasksList;
