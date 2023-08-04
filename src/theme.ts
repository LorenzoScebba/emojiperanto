import { createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily:
    "Open Sans, --apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
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
