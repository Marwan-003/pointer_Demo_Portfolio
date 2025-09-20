import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A855F7", // oklch(0.647 0.179 70.67) - Primary purple
      light: "#C084FC",
      dark: "#7C3AED",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#06B6D4", // oklch(0.769 0.188 70.08) - Secondary cyan
      light: "#22D3EE",
      dark: "#0891B2",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0F0F23", // oklch(0.08 0.01 286.62) - Dark background
      paper: "#1A1A2E", // oklch(0.12 0.015 286.62) - Card background
    },
    text: {
      primary: "#F8FAFC", // oklch(0.985 0.01 85.87) - Primary text
      secondary: "#94A3B8", // oklch(0.708 0.01 85.87) - Muted text
    },
    divider: "rgba(168, 85, 247, 0.12)",
    action: {
      hover: "rgba(168, 85, 247, 0.08)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
          padding: "12px 24px",
          fontSize: "0.95rem",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.25)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #A855F7, #06B6D4)",
          boxShadow: "0 4px 16px rgba(168, 85, 247, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #C084FC, #22D3EE)",
            boxShadow: "0 8px 32px rgba(168, 85, 247, 0.4)",
          },
        },
        outlined: {
          borderColor: "rgba(168, 85, 247, 0.3)",
          color: "#A855F7",
          backgroundColor: "rgba(168, 85, 247, 0.05)",
          backdropFilter: "blur(20px)",
          "&:hover": {
            borderColor: "#A855F7",
            backgroundColor: "rgba(168, 85, 247, 0.1)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(26, 26, 46, 0.8)",
          backdropFilter: "blur(20px) saturate(150%)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(15, 15, 35, 0.4)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
            borderColor: "rgba(168, 85, 247, 0.3)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(15, 15, 35, 0.95)",
          backdropFilter: "blur(20px) saturate(150%)",
          borderBottom: "1px solid rgba(168, 85, 247, 0.2)",
          boxShadow: "0 4px 16px rgba(15, 15, 35, 0.3)",
        },
      },
    },
  },
})

export default theme
