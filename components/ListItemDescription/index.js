import React from "react";

import { Container } from "./style";

export default function ListItemDescription({ text, ...props }) {
  return <Container {...props}>{text}</Container>;
}
