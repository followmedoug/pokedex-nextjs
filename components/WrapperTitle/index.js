import React from "react";
import { Container } from "./style";

export default function WrapperTitle({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
