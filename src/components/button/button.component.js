import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button">{label}</button>
    </div>
  );
};

export default Button;