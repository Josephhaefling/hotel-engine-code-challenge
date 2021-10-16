import styled from "styled-components";
import { colors } from '../../helpers/colors';

const Styled = {
  Result: styled.div`
    align-items: center;
    background-color: ${colors.blue};
    border-radius: 3px;
    box-shadow: 1px 2px 2px ${colors.gray};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    opacity: .90;
    padding: 5px 20px;
    margin-bottom: 10px;
    width: 80%;
  `
}

export default Styled;