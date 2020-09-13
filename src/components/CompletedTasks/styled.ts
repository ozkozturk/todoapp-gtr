import styled from '@emotion/styled';

const StyledCompletedTasks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  justify-content: flex-end;
  h1 {
    margin: 50px auto;
    width: 100%;
  }
  
  .edit-button {
    display: none;
  }
`;

export const StyledEmptyCompleted = styled.div`
  font-size: 1.4em;
  color: white;
  margin: 10px 0;
`;

export default StyledCompletedTasks;
