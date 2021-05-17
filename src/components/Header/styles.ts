import { breakpoints } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.brand.base};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 2rem 2rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 2rem 0;
  }

  display: flex;
  justify-content: space-between;
`;

export const Action = styled.div``;

export const Title = styled.h1`
  color: white;

  margin-left: -5px;
  line-height: 1;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }

  @media (min-width: ${breakpoints.sm}) {
    display: block;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 37px;
  }

  @media (min-width: ${breakpoints.lg}) {
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Artefact = styled.div`
  position: absolute;
  width: 100vw;

  top: 0;
  z-index: -1;

  background-color: ${(props) => props.theme.brand.primary};

  img {
    width: 100vw;

    transform: translateY(32.5vw);

    @media (max-width: ${breakpoints.sm}) {
      margin-top: 32.5rem;
    }

    @media (min-width: ${breakpoints.sm}) {
      margin-top: 20rem;
    }

    @media (min-width: ${breakpoints.md}) {
      margin-top: 10rem;
    }

    @media (min-width: ${breakpoints.lg}) {
      margin-top: 0rem;
    }

    @media (min-width: ${breakpoints.xl}) {
      margin-top: -10rem;
    }

    @media (min-width: ${breakpoints.xl2}) {
      margin-top: -20rem;
    }

    @media (min-width: ${breakpoints.xl3}) {
      margin-top: -45vh;
    }
  }
`;
