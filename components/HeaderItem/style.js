import styled from "styled-components";

export const Container = styled.li`
  margin-left: 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;

  :nth-child(1) {
    margin-left: 0;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
