import { extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  colors: {
    brand: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3", // Primary Blue
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
    bg: {
      900: "#171923",
      800: "#1A202C",
      700: "#2D3748"
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "bg.900" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "xl",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === "brand" ? "brand.500" : undefined,
          _hover: {
            bg: props.colorScheme === "brand" ? "brand.600" : undefined,
          }
        })
      }
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: "xl",
          bg: "bg.800",
        }
      }
    }
  },
});

export default theme;
