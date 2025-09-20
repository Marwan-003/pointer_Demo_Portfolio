import type React from "react"
import { Button as MuiButton, type ButtonProps, styled } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

/**
 * Custom styled MUI Button component that replaces CVA-based button variants
 * Provides consistent styling across the application with Material-UI theming
 */
const StyledButton = styled(MuiButton)(({ theme, variant, size }) => ({
  // Base styles for all button variants
  borderRadius: "12px",
  textTransform: "none",
  fontWeight: 600,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",

  // Size variants - replacing CVA size system
  ...(size === "small" && {
    padding: "8px 16px",
    fontSize: "0.875rem",
    minHeight: "32px",
  }),
  ...(size === "medium" && {
    padding: "12px 24px",
    fontSize: "1rem",
    minHeight: "40px",
  }),
  ...(size === "large" && {
    padding: "16px 32px",
    fontSize: "1.125rem",
    minHeight: "48px",
  }),

  // Primary variant - main call-to-action buttons
  ...(variant === "contained" && {
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    color: "#ffffff",
    boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.25)",

    "&:hover": {
      background: "linear-gradient(135deg, #5855eb 0%, #7c3aed 100%)",
      boxShadow: "0 6px 20px 0 rgba(99, 102, 241, 0.35)",
      transform: "translateY(-2px)",
    },

    "&:active": {
      transform: "translateY(0)",
    },
  }),

  // Outline variant - secondary actions
  ...(variant === "outlined" && {
    border: "2px solid rgba(99, 102, 241, 0.2)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    color: theme.palette.primary.main,

    "&:hover": {
      border: "2px solid rgba(99, 102, 241, 0.4)",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      transform: "translateY(-1px)",
    },
  }),

  // Text variant - minimal styling for subtle actions
  ...(variant === "text" && {
    color: theme.palette.text.secondary,

    "&:hover": {
      backgroundColor: "rgba(99, 102, 241, 0.08)",
      color: theme.palette.primary.main,
    },
  }),
}))

/**
 * Props interface extending MUI ButtonProps with custom additions
 * Includes routing capabilities and custom styling options
 */
interface CustomButtonProps extends Omit<ButtonProps, "component"> {
  /** Optional route path for navigation - uses React Router Link when provided */
  to?: string
  /** External URL for navigation - uses regular anchor tag when provided */
  href?: string
  /** Custom icon to display before button text */
  startIcon?: React.ReactNode
  /** Custom icon to display after button text */
  endIcon?: React.ReactNode
}

/**
 * Enhanced Button component that replaces the CVA-based button system
 * Features:
 * - Material-UI theming integration
 * - React Router navigation support
 * - Consistent hover and focus states
 * - Accessibility features built-in
 * - Custom gradient styling
 *
 * @param props - Button properties including styling and navigation options
 * @returns Styled button component with optional routing
 */
export const CustomButton: React.FC<CustomButtonProps> = ({ children, to, href, startIcon, endIcon, ...props }) => {
  // Determine the component type based on navigation props
  const getComponent = () => {
    if (to) return RouterLink // Use React Router Link for internal navigation
    if (href) return "a" // Use anchor tag for external links
    return "button" // Default button element
  }

  // Prepare additional props based on navigation type
  const getAdditionalProps = () => {
    if (to) return { to } // React Router Link props
    if (href) return { href, target: "_blank", rel: "noopener noreferrer" } // External link props
    return {} // No additional props for regular buttons
  }

  return (
    <StyledButton
      component={getComponent()}
      startIcon={startIcon}
      endIcon={endIcon}
      {...getAdditionalProps()}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default CustomButton
