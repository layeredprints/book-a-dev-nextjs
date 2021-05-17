import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 15rem;

  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 15rem;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 20rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 15rem;
  }
`;

export const Illustration = styled.img`
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    width: 200px;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 250px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 250px;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 150px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.text.primary};
  text-align: center;
  line-height: 1.8;
`;
