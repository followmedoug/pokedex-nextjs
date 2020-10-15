import styled from "styled-components";
import theme from "../../styles/themes/light";

export const Container = styled.button`
  height: 1.5rem;
  width: 5rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.buttonPrimary};
  border-radius: 8px;
  border: none;

  :hover {
    background-color: ${(props) => props.theme.colors.buttonSecundary};
    cursor: pointer;
  }
`;
