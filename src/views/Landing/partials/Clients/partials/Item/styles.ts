import styled from 'styled-components';

export const Container = styled.li`
  width: 15rem;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  border-radius: 1.3rem;

  box-shadow: ${(props) => `0 20px 80px 0 ${props.theme.opacity.primary}`};
`;

export const Illustration = styled.img`
  max-width: 200px;
`;
