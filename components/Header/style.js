import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: row;
  font-size: 22px;
  height: 3rem;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  padding: 10px 10px;
  /* -webkit-box-shadow: 0px 6px 10px -3px rgba(212, 11, 11, 1); */
`;
