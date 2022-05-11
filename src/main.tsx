import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ToDosProvider } from "./todos/todos";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ToDosProvider>
        <App />
      </ToDosProvider>
    </ChakraProvider>
  </React.StrictMode>
);
