import { breakpoints, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div`
  margin-top: 2rem;
  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    input,
    div,
    button {
      width: 100%;
    }

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

export const Title = styled.p`
  color: ${(props) => props.theme.text.primary};
  font-weight: ${fonts.weight.bold};
  font-size: 24px;
  line-height: 24px;
  text-align: center;

  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  font-style: italic;
  opacity: 0.5;
  text-align: center;

  margin-bottom: 2rem;
`;

export const Label = styled.label``;
