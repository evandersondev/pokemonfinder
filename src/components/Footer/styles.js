import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 920px;
  margin: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ffffff22;

  p {
    font-size: 8px;
    text-align: center;
    line-height: 15px;
  }

  .social {
    display: flex;
    align-items: center;

    a {
      transition: all 0.3s;

      &:first-child {
        margin-right: 20px;
      }

      &:hover {
        filter: brightness(70%);
      }
    }

    img {
      height: 16px;
    }
  }
`;
