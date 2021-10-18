import styled from 'styled-components';

//components
import { Link } from 'react-router-dom';


const Styled = {
  Results: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    text-align: center;
    width: 100%;

    @media(min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `,

  ResultLink: styled(Link)`
    color: inherit;
    text-decoration: none; 
    width: 100%;

    @media(min-width: 768px) {
      width: 45%;
    }
  `
};

export default Styled;