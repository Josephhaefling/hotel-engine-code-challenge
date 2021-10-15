import React from 'react';

const Header = ({ children }) => <div>{children}</div>;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

const Card = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Card.Header =  Header;
Card.Body =  Body;
Card.Footer =  Footer;

export default Card;