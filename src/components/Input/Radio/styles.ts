import { breakpoints } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.background.primary};

  border-radius: 1.5rem;
  box-shadow: 0 20px 80px 0 ${(props) => props.theme.opacity.primary};
  transition: 0.2s;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    height: 3rem;

    &:nth-of-type(2) {
      margin: 1rem 0;
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 7rem;
    height: 7rem;

    flex-grow: 1;

    &:nth-of-type(2) {
      margin: 0 1rem;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${palette.brand.lightest};
  }

  input {
    opacity: 0;
  }

  ${({ isSelected }: { isSelected: boolean }) => {
    if (isSelected) {
      return `box-shadow: 0 0 10px 0 ${palette.accent.base};`;
    }
    return null;
  }}
`;

export const Label = styled.label`
  font-size: 12px;
  font-style: italic;
  opacity: 0.5;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.text.primary};
`;

export const Image = styled.img`
  width: 50px;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }
`;
