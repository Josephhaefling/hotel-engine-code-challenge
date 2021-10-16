import React from 'react';

const Input = ({ handleChange, value }) => {
  return (
    <div>
      <input name="search" onChange={(e) => handleChange(e)} type="text" value={value} />
    </div>
  );
};

export default Input;