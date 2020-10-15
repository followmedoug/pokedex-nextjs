import React from "react";
import { Container } from "./style";

export default function ListItem({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
