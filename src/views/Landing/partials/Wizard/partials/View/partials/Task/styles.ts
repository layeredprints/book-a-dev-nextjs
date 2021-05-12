import styled from 'styled-components';

export { Container, Actions, Title, Subtitle } from '../shared';

export const Fieldset = styled.fieldset`
  &:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 2rem;
  }
`;
