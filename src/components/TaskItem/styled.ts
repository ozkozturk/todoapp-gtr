import styled from '@emotion/styled';

export const StyledTaskItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(256, 256, 256, 0.1);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.3em;
  color: white;
  border: 1px solid whitesmoke;
  
  .task-text {
    display: flex;
    flex-wrap: nowrap;
    
    input {
    margin-top: 5px;
    margin-right: 5px;
    }
  }
`;

export const StyledToggle = styled.label`
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
`;
