import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    width: 20rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 20rem;
  }
`;

export const Illustration = styled.img`
  margin-bottom: 1rem;

  max-width: 250px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 0.4rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.text.primary};
  text-align: center;
  font-style: italic;
`;
