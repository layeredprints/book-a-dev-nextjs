import { breakpoints, fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    width: 20rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 20rem;
  }
`;

export const Illustration = styled.img`
  margin-bottom: 1rem;

  max-width: 250px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 0.4rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 17.5rem;
  justify-content: center;

  margin-top: 1rem;
`;

export const ListItem = styled.li`
  list-style-type: none;

  text-align: center;
  font-style: italic;
  font-weight: ${fonts.weight.thin};

  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) => props.theme.background.tertiary};

  opacity: 0.8;

  padding: 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;

  margin: 0 0.25rem;
`;
