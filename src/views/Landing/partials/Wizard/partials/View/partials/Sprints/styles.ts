import { breakpoints, fonts } from 'src/styles';
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

export const Counter = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin: 1rem 0;
  margin-bottom: 2rem;

  input {
    margin: 0;

    @media (max-width: ${breakpoints.sm}) {
      width: 120%;
    }

    @media (min-width: ${breakpoints.sm}) {
      width: 140%;
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 300%;
    }
  }
`;

export const Label = styled.label`
  font-weight: ${fonts.weight.bold};
  color: ${(props) => props.theme.text.primary};
`;
