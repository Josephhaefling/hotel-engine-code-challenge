import styled from 'styled-components';

const Styled = {
  LandingPage: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-align: center;
    width: 100%;
  `, 

  SearchContainer: styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 641px){
      width: 80%;
    }
  `,

  Header: styled.div`
    display: flex;
    `,

  Body: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px;
    width: 60%;

    @media(min-width: 768px) {
      width: 40%;
    }
  `,

  SearchClearContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px;
    height: 115px;

    @media(min-width: 768px) {
      flex-direction: row;
      height: auto;
      width: 70%;
    }

    @media(min-width: 1024px) {
      flex-direction: row;
      height: auto;
      width: 50%;
    }
  `,

  ResultsContainer: styled.div`
    display: flex;
    width: 80%;
  `

}

export default Styled;