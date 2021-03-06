import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export { Container, Actions, Title, Subtitle, Label } from '../shared';

export const Fieldset = styled.fieldset`
  color: ${(props) => props.theme.text.secondary};

  &:nth-of-type(1) {
    > div {
      display: flex;

      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  &:nth-of-type(2) {
    > div {
      display: flex;

      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }

  &:nth-of-type(3) {
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

  margin-bottom: 1rem;
`;
