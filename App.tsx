import { NativeBaseProvider } from "native-base";
import React from "react";
import theme from "./theme";
import { Home } from "./views";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}
