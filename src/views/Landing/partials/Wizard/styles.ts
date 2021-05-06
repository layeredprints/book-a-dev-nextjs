import { breakpoints, fonts } from 'src/styles';
import { palette } from 'src/styles/colors';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;

  justify-content: space-around;
  padding: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }

  button {
    margin: 1rem;
  }
`;

export const Action = styled.div`
  background-color: ${(props) => props.theme.background.primary};

  margin: 1rem;

  width: 22.5rem;
  height: 25rem;

  border-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 20px 80px 0 ${(props) => props.theme.opacity.primary};

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${palette.brand.lightest};
  }
`;

export const Image = styled.img``;

export const Title = styled.h2`
  color: ${(props) => props.theme.text.primary};

  text-align: center;

  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (min-width: ${breakpoints.sm}) {
    font-size: 36px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 46px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 56px;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.text.primary};
  text-align: center;
  font-size: 26px;
  font-weight: ${fonts.weight.bold};

  margin-top: 2rem;

  margin-bottom: 2rem;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.text.primary};
  text-align: center;
  font-size: 18px;
  font-weight: ${fonts.weight.bold};

  margin-top: 2rem;
`;

export const Paragraph = styled.p`
  margin-top: 3rem;

  width: 25rem;

  text-align: center;
  font-size: 18px;
  line-height: 1.8;
`;
