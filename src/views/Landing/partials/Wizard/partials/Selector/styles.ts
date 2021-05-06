import { fonts } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;

  margin: 2rem 0;
`;

export const Head = styled.div`
  width: 25rem;
  height: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.3rem;
  box-shadow: 0 20px 80px 0 ${(props) => props.theme.opacity.primary};

  background-color: ${(props) => props.theme.background.primary};
`;

export const Action = styled.div`
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }

  ${({ isDisabled }: { isDisabled: boolean }) => {
    if (isDisabled) {
      return `visibility: hidden`;
    }

    return ``;
  }}
`;

export const Title = styled.label`
  color: ${(props) => props.theme.text.primary};
  font-weight: ${fonts.weight.bold};

  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.brand.primary};
  font-weight: ${fonts.weight.bold};

  font-size: 14px;
  line-height: 24px;
  text-align: center;

  text-transform: uppercase;
`;
