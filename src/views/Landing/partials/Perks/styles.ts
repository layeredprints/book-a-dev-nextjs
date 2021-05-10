import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;

  li {
    margin: 1rem;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

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

export const Subtitle = styled.p`
  color: ${(props) => props.theme.text.primary};

  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    line-height: 25px;

    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
