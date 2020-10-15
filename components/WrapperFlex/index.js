import React from "react";

import { Container } from "./style";

export default function WrapperFlex({
  column,
  backgroundColor,
  children,
  ...props
}) {
  return (
    <Container column={column} backgroundColor={backgroundColor} {...props}>
      {children}
    </Container>
  );
}
