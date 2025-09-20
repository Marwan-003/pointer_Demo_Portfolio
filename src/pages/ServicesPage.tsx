"use client"

import type React from "react"
import { useRef } from "react"
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Language as Globe,
  ShoppingCart,
  Dashboard as Layout,
  Smartphone,
  Search,
  Security as Shield,
  Bolt as Zap,
  Settings,
  CheckCircle,
  ArrowForward as ArrowRight,
  Star,
  AutoAwesome as Sparkles,
} from "@mui/icons-material"
import { Link } from "react-router-dom"

interface Service {
  icon: React.ComponentType<any>
  title: string
  description: string
  features: string[]
  color: string
  bgColor: string
  price: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
  icon: React.ComponentType<any>
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Custom Dynamic Websites",
    description: "Business sites, blogs, educational portals, and news websites built with modern technologies.",
    features: ["Custom CMS Integration", "Dynamic Content Management", "SEO Optimized", "Mobile Responsive"],
    color: "#A855F7",
    bgColor: "rgba(168, 85, 247, 0.1)",
    price: "Starting at $2,500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Full online stores with product management, shopping carts, and secure checkout systems.",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.1)",
    price: "Starting at $4,500",
  },
  {
    icon: Layout,
    title: "Multi-Page Business Sites",
    description: "Professional websites for corporates, agencies, consultancies, and startups.",
    features: ["Professional Design", "Contact Forms", "Service Pages", "About Sections"],
    color: "#A855F7",
    bgColor: "rgba(168, 85, 247, 0.1)",
    price: "Starting at $1,800",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimized for mobile, tablet, and desktop devices with perfect user experience.",
    features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch-Friendly Interface", "Fast Loading"],
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.1)",
    price: "Included in all packages",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your website rank higher in search results.",
    features: ["Keyword Optimization", "Meta Tags Setup", "Site Speed Optimization", "Analytics Integration"],
    color: "#A855F7",
    bgColor: "rgba(168, 85, 247, 0.1)",
    price: "Starting at $800",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing security updates, performance optimization, and technical support.",
    features: ["Security Monitoring", "Regular Updates", "Backup Services", "24/7 Support"],
    color: "#06B6D4",
    bgColor: "rgba(6, 182, 212, 0.1)",
    price: "Starting at $200/month",
  },
]

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business goals, target audience, and project requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description: "Create wireframes and designs that align with your brand and user experience goals.",
    icon: Layout,
  },
  {
    step: "03",
    title: "Development",
    description: "Build your website using modern technologies and best practices for performance.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy your website and provide ongoing support and maintenance as needed.",
    icon: Zap,
  },
]

const AnimatedProcessTimeline: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <Box ref={containerRef} sx={{ py: { xs: 8, lg: 12 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h2" gutterBottom>
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #A855F7, #06B6D4, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Process
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
            How we bring your vision to life in 4 simple steps
          </Typography>
        </Box>

        <Box position="relative" maxWidth="800px" mx="auto">
          {/* Animated progress line */}
          {!isMobile && (
            <Box
              position="absolute"
              left="50%"
              top={0}
              bottom={0}
              width="2px"
              sx={{ transform: "translateX(-50%)", zIndex: 1 }}
            >
              <Box
                position="absolute"
                width="100%"
                height="100%"
                sx={{
                  background: "linear-gradient(to bottom, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))",
                }}
              />
              <motion.div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, #A855F7, #06B6D4)",
                  scaleY: lineProgress,
                  transformOrigin: "top",
                }}
              />
            </Box>
          )}

          {processSteps.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                display="flex"
                alignItems="center"
                mb={index < processSteps.length - 1 ? 6 : 0}
                flexDirection={isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
                textAlign={isMobile ? "center" : index % 2 === 0 ? "left" : "right"}
              >
                {/* Step content */}
                <Box flex={1} px={isMobile ? 0 : 4}>
                  <Card
                    sx={{
                      maxWidth: isMobile ? "100%" : 400,
                      mx: isMobile ? "auto" : index % 2 === 0 ? 0 : "auto",
                      ml: isMobile ? "auto" : index % 2 === 0 ? 0 : "auto",
                      mr: isMobile ? "auto" : index % 2 === 0 ? "auto" : 0,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "12px",
                            background:
                              process.step === "01" || process.step === "03"
                                ? "rgba(168, 85, 247, 0.1)"
                                : "rgba(6, 182, 212, 0.1)",
                            border:
                              process.step === "01" || process.step === "03"
                                ? "1px solid rgba(168, 85, 247, 0.2)"
                                : "1px solid rgba(6, 182, 212, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <process.icon
                            sx={{
                              fontSize: 20,
                              color: process.step === "01" || process.step === "03" ? "#A855F7" : "#06B6D4",
                            }}
                          />
                        </Box>
                        <Typography variant="h5" component="h3">
                          {process.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary" lineHeight={1.6}>
                        {process.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                {/* Step number circle */}
                <Box position="relative" zIndex={2} my={isMobile ? 3 : 0}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #A855F7, #06B6D4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      boxShadow: "0 8px 32px rgba(168, 85, 247, 0.3)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {process.step}
                  </Box>
                </Box>

                {/* Spacer for alignment */}
                {!isMobile && <Box flex={1} />}
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

const ServicesPage: React.FC = () => {
  const theme = useTheme()

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, lg: 16 },
          background: `
            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" maxWidth="800px" mx="auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Chip
                icon={<Star />}
                label="Premium Web Development"
                sx={{
                  mb: 4,
                  px: 3,
                  py: 1,
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  backdropFilter: "blur(20px)",
                  color: "text.primary",
                  "& .MuiChip-icon": { color: "#A855F7" },
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h1" component="h1" gutterBottom>
                Web Development that Works for{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #A855F7, #06B6D4, #EC4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "100%",
                      height: 4,
                      background: "linear-gradient(90deg, #A855F7, #06B6D4)",
                      borderRadius: 2,
                    },
                  }}
                >
                  Your Business
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h5" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                From small landing pages to full e-commerce platforms, every website is dynamic, responsive, and
                tailored to your needs.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Main Services */}
      <Box sx={{ py: { xs: 10, lg: 16 } }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" component="h2" gutterBottom>
              Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #A855F7, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </Box>
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Comprehensive web development solutions for every business need
            </Typography>
          </Box>

          <Grid container spacing={4} maxWidth="1400px" mx="auto">
            {services.map((service, index) => (
              <Grid item xs={12} md={6} xl={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}
                >
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}>
                      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 3,
                            backgroundColor: service.bgColor,
                            border: `1px solid ${service.color}20`,
                            transition: "transform 0.3s ease",
                            "&:hover": { transform: "scale(1.1)" },
                          }}
                        >
                          <service.icon sx={{ fontSize: 24, color: service.color }} />
                        </Box>
                        <Box textAlign="right">
                          <Typography variant="h6" color="primary" fontWeight={700}>
                            {service.price.includes("$") ? service.price.split(" ").pop() : service.price}
                          </Typography>
                          {service.price.includes("Starting") && (
                            <Typography variant="caption" color="text.secondary">
                              Starting at
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      <Typography variant="h6" component="h3" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" mb={3} lineHeight={1.6}>
                        {service.description}
                      </Typography>

                      <Box mb={3} flex={1}>
                        {service.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} display="flex" alignItems="center" mb={1}>
                            <CheckCircle sx={{ fontSize: 16, color: service.color, mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowRight />}
                        sx={{ mt: "auto" }}
                      >
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section with Animated Timeline */}
      <AnimatedProcessTimeline />

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, lg: 16 },
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" maxWidth="800px" mx="auto">
            <Chip
              icon={<Sparkles />}
              label="Ready to Get Started?"
              sx={{
                mb: 4,
                px: 3,
                py: 1,
                background: "rgba(168, 85, 247, 0.1)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                backdropFilter: "blur(20px)",
                color: "text.primary",
                "& .MuiChip-icon": { color: "#A855F7" },
              }}
            />

            <Typography variant="h2" component="h2" gutterBottom>
              Ready to Start Your{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #A855F7, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Project
              </Box>
              ?
            </Typography>

            <Typography variant="h5" color="text.secondary" mb={6} lineHeight={1.6}>
              Let's discuss your requirements and create a website that drives results for your business.
            </Typography>

            <Box display="flex" gap={3} justifyContent="center" flexWrap="wrap">
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowRight />}
                sx={{ px: 4, py: 1.5 }}
              >
                Get Started
              </Button>
              <Button component={Link} to="/projects" variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
                View Our Work
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default ServicesPage
