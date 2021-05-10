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
    min-width: 7rem;
    height: 4rem;

    margin: 0.5rem;

    flex-grow: 1;
  }

  @media (min-width: ${breakpoints.sm}) {
    min-width: 7rem;
    height: 4rem;

    margin: 0.5rem;

    flex-grow: 1;
  }

  @media (min-width: ${breakpoints.lg}) {
    min-width: 10rem;
    height: 10rem;

    margin: 0.5rem;

    flex-grow: 0;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${palette.brand.lightest};
  }

  input {
    display: none;
  }

  ${({ isChecked }: { isChecked: boolean }) => {
    if (isChecked) {
      return `box-shadow: 0 0 10px 0 ${palette.accent.base};`;
    }
    return null;
  }}
`;

export const Label = styled.label`
  margin-top: 1rem;
  font-size: 12px;
  font-style: italic;
  opacity: 0.5;
`;

export const Image = styled.img`
  width: 75px;
`;
