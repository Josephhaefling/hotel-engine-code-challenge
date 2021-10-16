import React from 'react';

//styled
import Styled from './text.styled';

const Text = ({ children }) => {
 return (
   <div> 
     <Text>{children}</Text>
   </div>
 ) 
}

export default Text;