import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 920px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  a {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid #f6e58d;
    border-radius: 3px;
    color: #f6e58d;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #f6e58d;
      color: #333333;
    }

    &[disabled] {
      opacity: 0.2;
      color: #333333;
      border-color: #f6e58d;
      background: #f6e58d;
      cursor: default;
      transition: none;
      pointer-events: none;
    }
  }
`;
