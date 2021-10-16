import React from 'react';

//styles
import Styled from './card.styled';

const Header = ({ children }) => <div>{children}</div>;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

const Card = ({ children }) => {
  return (
    <Styled.Card>
      {children}
    </Styled.Card>
  );
};

Card.Header =  Header;
Card.Body =  Body;
Card.Footer =  Footer;

export default Card;