import { breakpoints, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: none;

  &:nth-of-type(1) {
    & > div {
      @media (max-width: ${breakpoints.sm}) {
      }

      @media (min-width: ${breakpoints.sm}) {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
      }

      @media (min-width: ${breakpoints.lg}) {
      }
    }
  }

  &:nth-of-type(2) {
    & > div {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const Actions = styled.div`
  display: flex;

  button {
    margin: 0 0.5rem;
  }
`;

export const Title = styled.label`
  color: ${(props) => props.theme.text.primary};
  font-weight: ${fonts.weight.bold};
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  margin-bottom: 2rem;
`;

export const Label = styled.p`
  font-weight: ${fonts.weight.bold};

  margin-bottom: 1rem;
`;
