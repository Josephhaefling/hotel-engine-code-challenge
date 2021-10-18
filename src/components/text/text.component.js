import React from 'react';

//styled
import Styled from './text.styled';

const Text = ({ children, color }) => {
 return (
   <div> 
     <Styled.Text color={color}>{children}</Styled.Text>
   </div>
 ); 
}

export default Text;