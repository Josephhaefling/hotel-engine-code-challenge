import React from 'react';

//styles
import Styled from './input.styled';

const Input = ({ handleChange, name, value }) => {
  return (
    <Styled.InputContainer>
      <label for={name}>{`Search by ${name}`}</label>
      <Styled.Input name={name} onChange={(e) => handleChange(e)} type="text" value={value} />
    </Styled.InputContainer>
  );
};

export default Input;