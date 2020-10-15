import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : ""};

  ${({ column }) =>
    column
      ? css`
          flex-direction: column;
        `
      : ""};
`;
