import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6rem;
  margin-bottom: 2rem;

  img {
    position: absolute;

    max-width: 250px;

    &:nth-of-type(1) {
      clip-path: ellipse(84px 87px at center);
    }
  }
`;
