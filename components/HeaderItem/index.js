import React from "react";

import { Container } from "./style";

export default function HeaderItem({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
