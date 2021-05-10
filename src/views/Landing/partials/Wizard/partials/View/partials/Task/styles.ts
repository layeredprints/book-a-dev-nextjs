import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: none;

  &:nth-of-type(1) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  margin-bottom: 2rem;
`;

export const Actions = styled.div`
  display: flex;

  margin-top: 1rem;

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

  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  font-style: italic;
  opacity: 0.5;
  text-align: center;

  margin-bottom: 2rem;
`;
