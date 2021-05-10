import { fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 2.5rem;

  input {
    border: none;
    outline: none;

    background-color: ${(props) => props.theme.background.primary};
    box-shadow: 0 20px 80px 0 ${(props) => props.theme.opacity.primary};

    border-radius: 5rem;
    padding: 1.5rem;

    transition: 0.2s;

    &:focus {
      box-shadow: 0 0 10px 0 ${palette.accent.lightest};
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 1.5rem;

  font-weight: ${fonts.weight.bold};
`;
