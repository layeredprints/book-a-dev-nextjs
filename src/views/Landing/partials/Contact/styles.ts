import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  form {
    margin-top: 5rem;
  }

  input {
    @media (max-width: ${breakpoints.sm}) {
      width: 15rem;
    }

    @media (min-width: ${breakpoints.sm}) {
      width: 25rem;
    }

    @media (min-width: ${breakpoints.md}) {
      width: 35rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 45rem;
    }
  }
`;

export const Content = styled.div``;

export const Title = styled.h2`
  color: ${(props) => props.theme.text.primary};

  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 28px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 36px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 46px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 56px;
  }
`;
