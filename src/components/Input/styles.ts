import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid;
  border-color: ${props => {
    return props.isFocused ? '#ff9000' : '#232129';
  }};
  color: ${props => {
    return props.isFocused || props.isFilled ? '#ff9000' : '#666360';
  }};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export default Container;
