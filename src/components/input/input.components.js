import React from 'react';

//styles
import Styled from './input.styled';

const Input = ({ handleChange, name, value }) => {
  return (
    <Styled.InputContainer>
      <label htmlFor={name}>{`Search by ${name}`}</label>
      <Styled.Input 
        data-testid={`${name}-input`}
        name={name} 
        onChange={(e) => handleChange(e)} 
        type="text" 
        value={value} 
      />
    </Styled.InputContainer>
  );
};

export default Input;