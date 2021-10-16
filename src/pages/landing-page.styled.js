import styled from 'styled-components';

const Styled = {
  LandingPage: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  `, 

  SearchContainer: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  Header: styled.div`
    display: flex;
    justify-content: center;
  `,

  Body: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 50%;
  `

}

export default Styled;