import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    brand: {
      50: "#f0e5fc",
      100: "#d1b3f6",
      200: "#b280f1",
      300: "#934deb",
      400: "#741be6",
      500: "#5f00d9", // Main purple from screenshot
      600: "#4c00ad",
      700: "#390082",
      800: "#260056",
      900: "#13002b",
    },
    gray: {
        50: "#f7f7f7", // Background color
    }
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
  components: {
    Button: {
        baseStyle: {
            fontWeight: "bold",
            borderRadius: "10px",
        },
    },
    Card: {
        baseStyle: {
            container: {
                borderRadius: "xl",
                boxShadow: "sm",
            }
        }
    }
  },
});

export default theme;
