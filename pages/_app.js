import React, { useState, useCallback } from "react";

import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const changeThemeHandler = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header changeTheme={() => changeThemeHandler()} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
