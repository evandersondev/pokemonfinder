import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #202020;
  margin-bottom: 60px;

  header {
    width: 90%;
    max-width: 920px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    a {
      color: #ffffff;
      display: flex;
      align-items: center;
      font-size: 9px;
      letter-spacing: 1px;
      h1 {
        margin-top: 5px;
      }
    }

    img {
      height: 34px;
      margin-right: 15px;
    }
  }
`;
