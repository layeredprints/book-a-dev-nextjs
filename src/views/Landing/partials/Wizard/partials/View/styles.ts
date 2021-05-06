import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    margin: 1rem;
  }
`;
