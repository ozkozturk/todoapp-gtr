import styled from '@emotion/styled';

export const StyledTaskItem = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.3em;
  color: white;
  border: 1px solid whitesmoke;
  
  button {
    outline: none;
  }
  
  .task-text {
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    word-break: break-all;
  }
`;

export const StyledToggle = styled.label`
  display: flex;
  align-items: center;
  width: 45px;
  
  input {
    width: 0;
    height: 0;
    position: absolute;
  }
  
  div {
    width: 40px;
    height: 20px;
    margin-right: 5px;
    background-color: red;
    border-radius: 34px;
    transition: .6s;
    position: relative;
    
    .rounded-ball {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
      transition: .6s;
      position: absolute;
    }
  }
  input:checked + div {
    background-color: #83878D;
    
    .rounded-ball {
      margin-left: 20px;
      background-color: #586261;
    }
  }
`;

export const StyledTaskChanges = styled.div`
  width: 20%;
  display: flex;
  justify-content: ${({ completed }: { completed: boolean }) => (completed ? 'flex-end' : '')};
  margin-right: 5px;
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.2em;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 575.98px){ 
    .ti {
      font-size: 1em;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .ti {
     font-size: 1.1em;
    }
  }
`;

export const StyledEditInput = styled.div`

  input {
    margin: 0;
    padding: 5px;
    outline: none;
    width: 100%;
    height: 30px;
    font-size: 0.8em;
    font-family: 'Roboto Light', sans-serif;
    font-style: italic;
    border: none;
    border-radius: 5px;
  }
`;
