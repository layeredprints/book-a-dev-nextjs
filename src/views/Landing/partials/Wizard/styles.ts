import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const Title = styled.h2`
  color: ${(props) => props.theme.text.primary};

  text-align: center;

  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 36px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 46px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 56px;
  }
`;