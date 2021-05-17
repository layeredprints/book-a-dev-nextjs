import { breakpoints } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;

    margin-bottom: 5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    align-items: center;
  }

  @media (min-width: ${breakpoints.md}) {
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-right: 3rem;
  }
`;

export const Illustration = styled.div`
  @media (max-width: ${breakpoints.sm}) {
    img {
      margin-bottom: 4rem;
      width: 300px;
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    img {
      margin-bottom: 4rem;
      width: 305px;
    }
  }

  @media (min-width: ${breakpoints.md}) {
    img {
      margin-left: 4rem;
      width: 400px;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    img {
      width: 500px;
    }
  }
`;

export const Title = styled.h2`
  color: white;
  text-transform: uppercase;

  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 28px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 36px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 46px;
    text-align: left;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 56px;
  }
`;

export const Paragraph = styled.p`
  color: white;

  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    line-height: 25px;

    text-align: center;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
    text-align: left;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
