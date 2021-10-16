import styled from 'styled-components';

//helpers
import { colors } from '../../helpers/colors';

const Styled = {
  InputContainer: styled.div`
    color: ${colors.gray};
    display: flex;
    flex-direction: column;
    width: 80%;
  `,

  Input: styled.input`
    margin: 10px 0;
    height: 30px;
    padding: 5px;
    width: 100%;
  `
}

export default Styled;