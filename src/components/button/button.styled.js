import styled from 'styled-components';

//helpers
import { colors } from '../../helpers/colors';

const Styled = {
  Button: styled.button`
    border: 2px solid ${({selected}) => selected ? `${colors.blue}` : `${colors.gray}`};
    border-radius: 3px;
    background-color: transparent;
    width: ${({size}) => size === "large" ? '200px' : '100px'};

    p {
      color: ${({selected}) => {
       return selected ? `${colors.blue}` : `${colors.gray}`
    }};
    }

  `
}

export default Styled;