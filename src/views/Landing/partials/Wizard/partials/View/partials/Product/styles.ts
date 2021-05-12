import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export { Container, Actions, Title, Subtitle } from '../shared';

export const Fieldset = styled.fieldset`
  &:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 2rem;
  }

  &:nth-of-type(2) {
    @media (max-width: ${breakpoints.sm}) {
      width: 90vw;
    }

    @media (min-width: ${breakpoints.sm}) {
      width: 60vw;
    }

    @media (min-width: ${breakpoints.lg}) {
      max-width: 40rem;
    }
  }
`;
