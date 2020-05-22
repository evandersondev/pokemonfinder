import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 920px;
  margin: auto;
  height: calc(100% - 140px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    width: 120px;
    height: 40px;
    border: 3px solid #f6e58d;
    background: transparent;
    color: #f6e58d;
    border-radius: 3px;
    margin-bottom: 30px;
    font-size: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #f6e58d;
      color: #333333;
    }
  }

  ul {
    list-style: none;
  }
`;

export const Profile = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  h2 {
    width: 100%;
    display: inline-block;
    font-size: 16px;
    background: #f6e58d;
    text-align: center;
    padding: 15px 0;
    color: #333333;
    margin-bottom: 15px;
  }

  .image-container {
    width: 100%;
    height: 100%;
    background: #f6e58d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
      position: absolute;
      font-size: 8px;
      bottom: 7px;
      color: #787878;
    }

    img {
      width: 70%;

      &:hover {
        cursor: pointer;
      }
    }
  }

  strong {
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px 0;
    background: #f6e58d;
    margin-top: 15px;
    color: #333333;
  }
`;

export const Characteristc = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 555px) {
    justify-content: center;
    text-align: center;
  }

  h3 {
    margin-bottom: 30px;
    text-decoration: underline;
  }

  ul {
    margin-bottom: 30px;
  }

  li {
    line-height: 25px;
  }
`;

export const Stats = styled.div``;

export const Abilites = styled.div``;

export const Types = styled.div`
  h3 {
    margin-bottom: 30px;
    text-decoration: underline;
  }

  ul {
    margin-bottom: 30px;
  }

  li {
    line-height: 25px;
  }
`;
