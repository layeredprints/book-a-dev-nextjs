import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export { Container, Actions, Title, Subtitle } from '../shared';

export const Fieldset = styled.fieldset`
  @media (max-width: ${breakpoints.sm}) {
    width: 90vw;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 60vw;
  }

  @media (min-width: ${breakpoints.lg}) {
    max-width: 40rem;
  }
`;
