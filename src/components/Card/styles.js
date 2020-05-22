import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card {
    width: 100%;
    max-width: 280px;
    height: 120px;
    background: transparent;
    border: 0;
    color: #ffffff;
    padding: 0 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 90px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    > img:hover {
      position: relative;
      top: -20px;
    }

    h3 {
      width: 230px;
      font-size: 16px;
      text-align: center;
      padding: 15px;
      font-weight: 300;
      margin-bottom: 15px;
      background: #f6e58d;
      color: #333;
    }

    span {
      display: flex;
      align-items: baseline;
      position: absolute;
      top: 0;
      right: 0;

      img {
        width: 18px;
        margin-right: 5px;
      }
    }
  }
`;
