import styled from 'styled-components';

//components
import Card from '../../components/card/card.component';

//helpers
import { colors } from '../../helpers/colors';

const Styled = {
  DetailPage: styled.div`
    align-items: center;
    display: flex;
    height: 95vh;
    justify-content: center;
  `,

  Card: styled(Card)`
    border-radius: 3px;
    box-shadow: 0px 0px 3px ${colors.gray};
    padding: 0 20px 20px 20px;
  `,

  CardFooter: styled(Card.Footer)`
    margin-top: 20px;
  `
}

export default Styled;