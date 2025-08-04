import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const projects = [
  {
    title: "Project 1: GOGO GET AI",
    url: "https://www.gogoget.ai/",
    description:
      "Designed and built the brand identity and UX foundation for an AI-powered search tool. Delivered logo design, typography system, mood boards, and responsive wireframes. Translated strategy into clean, modern visuals tailored for tech-forward users.",
    figma:
      "https://www.figma.com/design/jKZRSXQyxZZPWOSPMFA2Sz/Gogo-Mobile?node-id=0-1&t=J8ZvBpbiP9rrdawN-1",
    columns: [
      [
        {
          image: "/portfolio/gogo/1. Project Overview@3x.png",
          title: "GOGO Project Overview",
          description: "AI-powered search platform identity",
        },
        {
          image: "/portfolio/gogo/4. Logo Development@3x.png",
          title: "Logo Development",
          description: "AI symbol with modern tech essence",
        },
      ],
      [
        {
          image: "/portfolio/gogo/2. Discover & Brand Strategy@3x.png",
          title: "Mood Board & Strategy",
          description: "Discovery & concept direction",
        },
        {
          image: "/portfolio/gogo/5. Lo-fi wireframes@3x.png",
          title: "Lo-fi Wireframes",
          description: "UX structure & user flow planning",
        },
      ],
      [
        {
          image: "/portfolio/gogo/3. Typeface@3x.png",
          title: "Typography System",
          description: "Modern fonts for digital readability",
        },
        {
          image: "/portfolio/gogo/6. Hi-fi wireframes@3x.png",
          title: "Hi-fi Wireframes",
          description: "Visual design & interaction refinement",
        },
      ],
    ],
  },
  {
    title: "Project 2: Brand Identity for ENS",
    url: "https://www.ensecure.in/",
    description:
      "Created a secure and professional brand identity for a cybersecurity company. Delivered brand strategy, logo evolution, type hierarchy, social media templates, and marketing collaterals. Final output included a polished brand booklet and stakeholder-ready assets.",
    columns: [
      [
        {
          image: "/portfolio/1. Project Overview.png",
          title: "ENS Project Overview",
          description: "Brand Identity Design",
        },
        {
          image: "/portfolio/2. Discover & Brand Strategy.png",
          title: "Mood Board & Strategy",
          description: "Discovery Phase",
        },
        {
          image: "/portfolio/4. Logo Development.png",
          title: "Logo Evolution",
          description: "Symbolizing Security",
        },
      ],
      [
        {
          image: "/portfolio/6. Brand Profile Booklet Design.png",
          title: "Brand Booklet",
          description: "Stakeholder-ready presentation",
        },
        {
          image: "/portfolio/3. Typeface.png",
          title: "Typeface & Hierarchy",
          description: "Font selections & pairings",
        },
        {
          image: "/portfolio/5. Brand Applications.png",
          title: "Business Cards",
          description: "Professional applications",
        },
      ],
      [
        {
          image: "/portfolio/7. AD Posters & Mockups.png",
          title: "Ad Posters & Mockups",
          description: "Billboards & print designs",
        },
        {
          image: "/portfolio/8. Social Media Templates.png",
          title: "Social Media Templates",
          description: "Cohesive digital branding",
        },
        {
          image: "/portfolio/9. Final Reflection & Feedback.png",
          title: "Feedback",
          description: "Client praise & project takeaways",
        },
      ],
    ],
  },
];

const Column = ({ data, onImageClick }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            mb: { xs: 2, sm: 3 },
            cursor: "pointer",
            "&:last-child": { mb: 0 },
          }}
          onClick={() => onImageClick(item.image)}
        >
          <Box
            boxShadow={1}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2,
              "&:hover img": { transform: "scale(1.2)" },
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              width={1}
              height={1}
              loading="lazy"
              sx={{
                objectFit: "cover",
                transition: "transform .7s ease !important",
                transform: "scale(1)",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
              }}
            />
            <Box p={2} bgcolor="background.paper">
              <Typography variant="h6" fontWeight={700}>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Main = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (img) => setSelectedImage(img);
  const handleCloseDrawer = () => setSelectedImage(null);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Portfolio
      </Typography>
      {projects.map((project, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight={700}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {project.description}
              </Typography>
              <Box display="flex" flexDirection="column" gap={0.5} mt={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    component="img"
                    src="/illustrations/web.png"
                    alt="Website"
                    sx={{ width: 16, height: 16 }}
                  />
                  <Typography
                    variant="body2"
                    component="a"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "primary.main",
                        "&:hover": { textDecoration: "underline" },
                      },
                    }}
                  >
                    {project.url.replace(/^https?:\/\//, "")}
                  </Typography>
                </Box>
                {project.figma && (
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box
                      component="img"
                      src="/illustrations/Figma.svg"
                      alt="Figma"
                      sx={{ width: 16, height: 16 }}
                    />
                    <Typography
                      variant="body2"
                      component="a"
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      View Figma Prototype
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4}>
              {project.columns.map((col, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Column data={col} onImageClick={handleImageClick} />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}

      <Drawer
        anchor="bottom"
        open={Boolean(selectedImage)}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            height: "100vh",
            width: "100vw",
            p: 2,
            position: "relative",
          },
        }}
      >
        <IconButton
          onClick={handleCloseDrawer}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        {selectedImage && (
          <Box
            component="img"
            src={selectedImage}
            alt="Full view"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              mt: 4,
            }}
          />
        )}
      </Drawer>
    </Box>
  );
};

export default Main;
