import styled from 'styled-components';

//helpers
import { colors } from '../../helpers/colors';

const Styled = {
  Button: styled.button`
    background-color: transparent;
    border: 1px solid ${({selected}) => selected ? `${colors.blue}` : `${colors.gray}`};
    border-radius: 5px;
    cursor: pointer;
    width: ${({size}) => size === "large" ? '200px' : '100px'};

    p {
      color: ${({selected}) => {
       return selected ? `${colors.blue}` : `${colors.gray}`
    }};
    }

  `
}

export default Styled;