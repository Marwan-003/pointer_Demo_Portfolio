"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  styled,
  Container,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon, ArrowForward } from "@mui/icons-material"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { CustomButton } from "./MuiButton"

/**
 * Navigation menu items configuration
 * Centralized navigation structure for consistent routing
 */
const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Plans", path: "/plans" },
  { name: "Reviews", path: "/reviews" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
]

/**
 * Styled AppBar with glassmorphism effect
 * Replaces the previous glass CSS class with MUI styled component
 */
const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  position: "sticky",
  top: 0,
  zIndex: 1100,
}))

/**
 * Styled logo container with hover animations
 * Provides interactive branding element with smooth transitions
 */
const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&:hover .logo-icon": {
    transform: "rotate(10deg) scale(1.1)",
  },
}))

/**
 * Animated logo icon with gradient background
 * Features pulse animation and hover effects
 */
const LogoIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: 16,
  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.5rem",
  transition: "all 0.3s ease",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    backgroundColor: "#f59e0b",
    borderRadius: "50%",
    animation: "pulse 2s infinite",
  },

  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 1,
      transform: "scale(1)",
    },
    "50%": {
      opacity: 0.7,
      transform: "scale(1.1)",
    },
  },
}))

/**
 * Styled navigation link with active state indication
 * Replaces Next.js Link with React Router Link and custom styling
 */
const NavLink = styled(RouterLink, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  position: "relative",
  padding: theme.spacing(1, 2),
  borderRadius: 12,
  textDecoration: "none",
  color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
  backgroundColor: isActive ? "rgba(99, 102, 241, 0.15)" : "transparent",
  fontWeight: isActive ? 600 : 500,
  fontSize: "0.875rem",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    color: theme.palette.primary.main,
    transform: "translateY(-1px)",
  },

  // Active indicator dot
  ...(isActive && {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 4,
      left: "50%",
      transform: "translateX(-50%)",
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
    },
  }),
}))

/**
 * Main Navigation Component
 * Features:
 * - Responsive design with mobile drawer
 * - Glassmorphism styling
 * - Active route highlighting
 * - Smooth animations and transitions
 * - Accessibility support
 *
 * Replaces Next.js navigation with React Router implementation
 */
export const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
  const location = useLocation()

  /**
   * Handle mobile drawer toggle
   * Manages mobile navigation menu state
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  /**
   * Handle scroll effect for navbar styling
   * Adds background blur and shadow on scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /**
   * Mobile drawer content
   * Renders navigation items in mobile-friendly format
   */
  const drawer = (
    <Box sx={{ width: 280, height: "100%", bgcolor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(20px)" }}>
      {/* Mobile drawer header */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(99, 102, 241, 0.1)",
        }}
      >
        <LogoContainer component={RouterLink} to="/">
          <LogoIcon className="logo-icon">P</LogoIcon>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pointer
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Digital Agency
            </Typography>
          </Box>
        </LogoContainer>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile navigation items */}
      <List sx={{ px: 2, py: 3 }}>
        {navigationItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                py: 1.5,
                backgroundColor: location.pathname === item.path ? "rgba(99, 102, 241, 0.1)" : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.15)",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    color: location.pathname === item.path ? theme.palette.primary.main : theme.palette.text.primary,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Mobile CTA button */}
      <Box sx={{ p: 2, mt: "auto" }}>
        <CustomButton
          variant="contained"
          fullWidth
          to="/contact"
          endIcon={<ArrowForward />}
          onClick={handleDrawerToggle}
        >
          Get Started
        </CustomButton>
      </Box>
    </Box>
  )

  return (
    <>
      <GlassAppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: 80, px: { xs: 2, sm: 3 } }}>
            {/* Logo section */}
            <LogoContainer component={RouterLink} to="/" sx={{ mr: "auto" }}>
              <LogoIcon className="logo-icon">P</LogoIcon>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Pointer
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.75rem" }}>
                  Digital Agency
                </Typography>
              </Box>
            </LogoContainer>

            {/* Desktop navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mx: 4 }}>
                {navigationItems.map((item) => (
                  <NavLink key={item.name} to={item.path} isActive={location.pathname === item.path}>
                    {item.name}
                  </NavLink>
                ))}
              </Box>
            )}

            {/* Desktop CTA button */}
            {!isMobile && (
              <CustomButton variant="contained" to="/contact" endIcon={<ArrowForward />} sx={{ ml: 2 }}>
                Get Started
              </CustomButton>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  ml: 2,
                  "&:hover": {
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </GlassAppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navigation
