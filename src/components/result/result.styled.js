import styled from "styled-components";
import { colors } from '../../helpers/colors';

const Styled = {
  Result: styled.div`
    align-items: center;
    background-color: ${colors.gray};
    border-radius: 3px;
    box-shadow: 0px 0px 3px ${colors.gray};
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    opacity: .90;
    margin-bottom: 10px;
    width: 100%;
  `
}

export default Styled;