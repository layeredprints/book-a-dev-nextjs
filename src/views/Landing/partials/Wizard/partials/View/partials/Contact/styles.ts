import { breakpoints, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: none;
  width: 100%;
  margin: 0 1rem;

  &:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &:nth-of-type(2) {
  }
`;

export const Actions = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column-reverse;

    button {
      margin: 0.5rem 0;
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: row;

    button {
      margin: 0 0.5rem;
    }
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
