"use client";

import { createTheme } from "@mantine/core";

const theme = createTheme({
  components: {
    Button: {
      styles: {
        root: {
          transition: "background-color 200ms ease",
        },
      },
    },
  },
});

export default theme;
