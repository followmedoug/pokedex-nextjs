import React from "react";

import { Container } from "./style";

export default function HeaderListItems({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
