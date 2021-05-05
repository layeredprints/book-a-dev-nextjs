import { breakpoints } from 'src/styles';
import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
}

export const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: Props) => {
    const { backgroundColor } = props;
    let styles;

    if (backgroundColor) {
      styles = `${styles}; background-color: ${backgroundColor}`;
    }

    return styles;
  }}
`;

export const Content = styled.div`
  width: 100%;

  max-width: 1100px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 4rem 2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 8rem 5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 8rem 0;
  }
`;
