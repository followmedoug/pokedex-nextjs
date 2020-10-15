import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.h1`
  font-size: 5rem;
  font-family: cursive;
  color: ${(props) => props.theme.colors.titleColor};
  filter: drop-shadow(2px 2px 5px black);

  -webkit-text-stroke: 4px
    ${(props) => shade(0.15, props.theme.colors.borderBoxColor)};
`;
