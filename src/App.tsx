import React, { FC } from 'react';
import styled from '@emotion/styled';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';

const StyledAppLayout = styled.div`
  width: 40%;
  min-height: 400px;
  background-color: #FF6666;
  box-shadow: 1px 4px 12px 3px rgba(87,7,19,0.36);
  border-radius: 5px;
  margin: 100px auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1 {
    border-bottom: 1px solid #FFF;
    font-size: 2em;
  }
`;

const App: FC = () => {
  return (
    <StyledAppLayout>
      <h1>THINGS TO DO</h1>
      <TaskInput />
      <TasksList />
    </StyledAppLayout>
  );
};

export default App;
