import { breakpoints } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.brand.base};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 2rem;
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

export const Head = styled.div`
  display: flex;
  align-items: flex-end;
`;
