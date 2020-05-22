import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background: transparent;
  border: 7px solid #262626;
  border-top-color: #f6e58d;
  border-radius: 50%;
  margin: auto;
  margin-top: 120px;
  animation: loader 0.5s linear infinite;
  z-index: 999;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
