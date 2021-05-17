import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
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

export const Actions = styled.div``;

export const Fieldset = styled.fieldset`
  border: none;
  width: 100%;

  input {
    width: 100%;
  }
`;
