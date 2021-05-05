import { fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.accent.primary};

  font-weight: ${fonts.weight.normal};

  outline: none;
  border: 2px solid ${(props) => props.theme.accent.primary};

  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: ${fonts.weight.bold};
  font-size: 14px;

  font-size: 14px;

  cursor: pointer;

  width: 100%;

  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.accent.primary};
    border: 2px solid ${(props) => props.theme.accent.primary};

    color: ${palette.white.base};
  }
`;
