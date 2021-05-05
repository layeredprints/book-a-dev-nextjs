import { fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.theme.accent.tertiary};
  color: ${palette.white.base};

  font-weight: ${fonts.weight.normal};

  outline: none;
  border: 2px solid ${(props) => props.theme.accent.tertiary};

  padding: 1rem 3rem;
  border-radius: 2rem;
  font-weight: ${fonts.weight.bold};
  font-size: 14px;

  cursor: pointer;

  text-transform: uppercase;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.accent.tertiary};
    border: 2px solid ${(props) => props.theme.accent.tertiary};
  }
`;
