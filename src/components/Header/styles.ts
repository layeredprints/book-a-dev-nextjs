import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Action = styled.div``;

export const Title = styled.h1`
  color: white;

  margin-left: -5px;
  line-height: 1;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 37px;
  }

  @media (min-width: ${breakpoints.lg}) {
  }
`;
