import { breakpoints, fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
    text-align: center;
  }

  input {
    border: none;
    outline: none;

    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.text.primary};
    box-shadow: 0 20px 80px 0 ${(props) => props.theme.opacity.primary};
    border-radius: 5rem;
    transition: 0.2s;

    padding-left: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-right: 0;

    margin-top: 1rem;
    margin-bottom: 2rem;

    @media (max-width: ${breakpoints.sm}) {
      width: 95%;
    }

    &:focus {
      box-shadow: 0 0 10px 0 ${palette.accent.lightest};
    }
  }
`;

export const Label = styled.label`
  font-weight: ${fonts.weight.bold};
  color: ${(props) => props.theme.text.primary};
`;
