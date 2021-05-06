import { fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
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

  &:focus {
    box-shadow: 0 0 10px 0 ${palette.accent.lightest};
  }

  ${(props) => {
    const { isValid, theme } = props;

    if (isValid || isValid == undefined) {
      return `
        color: ${theme.text.primary};
        box-shadow: 0 20px 80px 0 ${theme.opacity.primary};
      `;
    }

    return `
      color: ${theme.danger.primary};
      box-shadow: 0 20px 80px 0 ${theme.opacity.primary};
    `;
  }}
`;

export const Error = styled.p`
  margin-top: 1rem;
  font-size: ${fonts.getSizeInRem(8)};
  font-weight: ${fonts.weight.bold};
  color: ${(props) => props.theme.danger.primary};
`;
