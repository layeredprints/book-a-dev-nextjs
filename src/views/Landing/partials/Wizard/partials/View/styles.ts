import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;

  button {
    margin: 1rem;
  }
`;
