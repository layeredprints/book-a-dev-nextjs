import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-top: 1rem;
  margin-bottom: 4rem;
`;

export const Indicator = styled.div`
  width: 5rem;
  height: 0.4rem;

  margin: 0.2rem;

  border-radius: 2rem;

  background-color: ${(props) => props.theme.brand.primary};

  opacity: 0.3;

  ${({ isCompleted }: { isCompleted: boolean }) => {
    if (isCompleted) {
      return `opacity: 1`;
    }

    return ``;
  }}
`;
