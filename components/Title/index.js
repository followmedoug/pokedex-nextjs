import React from "react";
import { Container } from "./style";

export default function Title({ text, ...props }) {
  return <Container {...props}>{text}</Container>;
}
