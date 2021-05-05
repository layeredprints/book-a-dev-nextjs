import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 2rem 2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 2rem 0;
  }

  display: flex;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div {
    margin-left: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
