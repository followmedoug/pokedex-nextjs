import React from "react";
import { Container } from "./style";

export default function ListPokemon({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
