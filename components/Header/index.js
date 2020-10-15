import React from "react";
import Link from "next/link";
import Button from "../Button";
import HeaderItem from "../HeaderItem";
import HeaderListItems from "../HeaderListItems";
import HeaderLink from "../HeaderLink";
import { Container } from "./style";

export default function Header({ ...props }) {
  return (
    <Container {...props}>
      <HeaderListItems>
        <HeaderItem>
          <Link href="/">
            <HeaderLink>Home</HeaderLink>
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="/list">
            <HeaderLink>Lista</HeaderLink>
          </Link>
        </HeaderItem>
      </HeaderListItems>
      <Button label="Clica!" onClick={() => props.changeTheme()} />
    </Container>
  );
}
