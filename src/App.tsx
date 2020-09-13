import React, { FC } from 'react';
import styled from '@emotion/styled';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';

const StyledAppLayout = styled.div`
  max-width: 450px;
  width: 85%;
  min-height: 400px;
  background-color: #FF6666;
  box-shadow: 1px 4px 12px 3px rgba(87,7,19,0.36);
  border-radius: 5px;
  font-family: 'Roboto', sans-serif;
  margin: 80px auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  h1, h2 {
    border-bottom: 1px solid #FFF;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
`;

const App: FC = () => (
  <StyledAppLayout>
    <h1>THINGS TO DO</h1>
    <TaskInput />
    <TasksList />
  </StyledAppLayout>
);

export default App;
