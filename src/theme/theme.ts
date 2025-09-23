import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          solid: { value: "#03dac5" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
