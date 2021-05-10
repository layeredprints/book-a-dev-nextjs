import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

export const Indicator = styled.div`
  height: 0.25rem;

  margin: 0.2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.brand.primary};
  opacity: 0.3;

  @media (max-width: ${breakpoints.sm}) {
    width: 2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 3.5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 5rem;
  }

  ${({ isCompleted }: { isCompleted: boolean }) => {
    if (isCompleted) {
      return `opacity: 1`;
    }

    return ``;
  }}
`;
