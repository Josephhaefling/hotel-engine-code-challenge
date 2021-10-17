import React from 'react';

//styles
import Styled from './card.styled';

const Header = ({ children, ...rest }) => <div {...rest}>{children}</div>;
const Body = ({ children, ...rest }) => <div {...rest}>{children}</div>;
const Footer = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Card = ({ children, ...rest }) => {
  return (
    <Styled.Card {...rest}>
      {children}
    </Styled.Card>
  );
};

Card.Header =  Header;
Card.Body =  Body;
Card.Footer =  Footer;

export default Card;