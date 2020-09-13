import styled from '@emotion/styled';

const StyledTaskInput = styled.div`
  width: 90%;
  form {
    height: 50px;
    margin: 20px 5px 50px 5px;
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
      font-size: 1.5em;
      font-family: 'Roboto', sans-serif;
      padding-left: 10px;
    }
    
    button {
      height: 50px;
      font-size: 20px;
      line-height: 20px;
      color: white;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:hover {
        background-color: red;
      }
    }
  }
  @media (max-width: 576px) { 
    width: 100%;
    form {
      margin: 20px 0 50px 0;
      input {
        width: 100%;
        font-size: 1.2em;
      }
    }
   }

  @media (max-width: 768px) {
    width: 100%;
    form {
      margin: 20px 0 50px 0;
      input {
        width: 100%;
        font-size: 1.2em;
      }
    }
  }
`;

export default StyledTaskInput;
