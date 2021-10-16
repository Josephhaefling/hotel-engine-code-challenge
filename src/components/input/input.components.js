import React from 'react';

const Input = ({ handleChange, name, value }) => {
  console.log('value', value)
  return (
    <div>
      <input name={name} onChange={(e) => handleChange(e)} type="text" value={value} />
    </div>
  );
};

export default Input;