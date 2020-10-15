import React from "react";
import { Container } from "./style";

export default function Button({ label, onClick = (_) => _, ...props }) {
  return (
    <Container
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...props}
    >
      {label}
    </Container>
  );
}
