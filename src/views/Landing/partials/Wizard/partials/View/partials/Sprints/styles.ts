import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  color: ${(props) => props.theme.text.primary};
  font-weight: ${fonts.weight.bold};

  font-size: 24px;
  line-height: 24px;
  text-align: center;

  margin-bottom: 2rem;
`;
