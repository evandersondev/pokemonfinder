import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card {
    width: 100%;
    max-width: 280px;
    background: transparent;
    border: 0;
    color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
    transition: all 0.5s ease-in-out;

    button {
      width: 220px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 0;
      padding: 0 15px;
      background: #f6e58d;
      cursor: pointer;

      img {
        height: 22px;
      }
    }
  }
`;
