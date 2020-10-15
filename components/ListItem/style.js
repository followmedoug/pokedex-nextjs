import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  width: 15%;
  height: 100%;
  margin-bottom: 1rem;
  /* border: 4px solid ${(props) => props.theme.colors.borderBoxColor}; */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  background-color: ${(props) => props.theme.colors.text};

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
