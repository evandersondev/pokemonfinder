import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  background: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title,
  h2,
  p {
    margin-bottom: 40px;
  }

  .title {
    display: flex;
    align-items: center;

    h1 {
      font-size: 250px;

      @media (max-width: 840px) {
        font-size: 90px;
      }
    }

    img {
      width: 290px;
      margin: 0 30px;

      @media (max-width: 840px) {
        width: 90px;
        margin: 0 15px;
      }
    }
  }

  h2 {
    font-size: 48px;

    @media (max-width: 840px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    text-align: center;

    @media (max-width: 840px) {
      font-size: 14px;
    }
  }

  a {
    padding: 20px 30px;
    background: #e74744;
    border-radius: 30px;
    color: #ffffff;
  }
`;
