import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToDosProvider } from "./context/todos";
import system from "./theme/theme";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ToDosProvider>
        <App />
      </ToDosProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
