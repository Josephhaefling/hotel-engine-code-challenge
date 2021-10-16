import styled from 'styled-components/';
import { colors } from '../../helpers/colors';

const Styled = {
  Text: styled.p`
    color: ${({color}) => color ? `colors${color}` : `${colors.gray}`};
    font-weight: 600;
  `
}

export default Styled;