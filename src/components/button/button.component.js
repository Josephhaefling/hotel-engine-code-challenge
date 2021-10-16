import React from 'react';

//styles
import Styled from './button.styled';

//components
import Text from '../text/text.component';

const Button = ({ label, onClick, selected, size, ...rest }) => {

  return (
    <div>
      <Styled.Button 
        selected={selected} 
        size={size}
        onClick={onClick} 
        type="button" 
        {...rest}
      >
        <Text>
          {label}
        </Text>
      </Styled.Button>
    </div>
  );
};

export default Button;