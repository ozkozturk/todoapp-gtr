import styled from '@emotion/styled';

const StyledTaskInput = styled.div`
  width: 90%;
  form {
    height: 50px;
    margin: 20px 0 50px 0;
    display: flex;
    
    input, button {
      border: none;
      border-radius: 5px;
      outline: none;
      margin: 0 5px;
    }
    
    input {
      width: 80%;
      border-bottom: 1px solid red;
      font-size: 1.2em;
      font-family: monospace;
      padding-left: 10px;
    }
    
    button {
      width: 50px;
      height: 50px;
      font-size: 1.2em;
      color: white;
      background: transparent;
      cursor: pointer;
      
      &:hover {
        background-color: red;
      }
    }
  }
`;

export default StyledTaskInput;
