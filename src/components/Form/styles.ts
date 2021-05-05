import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.form`
  border-radius: 0.4rem;

  margin-bottom: 1rem;

  // Button
  button {
    margin-top: 3rem;
  }

  // correction Label
  div:first-of-type label {
    padding-top: 0;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.text.primary};
  font-size: ${fonts.getSizeInRem(9)};
  padding: 1.5rem 0 0.75rem 0;
  font-family: Graphik;
  font-weight: ${fonts.weight.bold};
`;

export const Input = styled.input<any>`
  border: none;
  outline: none;

  font-size: ${fonts.getSizeInRem(9)};
  padding: 1rem 1.5rem;
  border-radius: 2rem;

  transition: 0.2s;

  ${(props) => {
    const { isValid, theme } = props;

    if (isValid || isValid == undefined) {
      return `
        background-color: ${theme.background.secondary};
        color: ${theme.text.primary};
        //box-shadow: inset 0 0 2px ${theme.opacity.primary};
      `;
    }

    return `
      background-color: ${theme.danger.tertiary};
      color: ${theme.danger.primary};
      //box-shadow: inset 0px 0px 0px 1.5px ${theme.danger.primary};
    `;
  }}
`;

export const Error = styled.p`
  margin-top: 1rem;
  font-size: ${fonts.getSizeInRem(8)};
  font-weight: ${fonts.weight.bold};
  color: ${(props) => props.theme.danger.primary};
`;
