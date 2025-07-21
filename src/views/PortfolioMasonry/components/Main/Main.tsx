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

// Sample project data
const projects = [
  {
    title: "Project 1: Brand Identity for ENS",
    url: "https://www.ensecure.in/",
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
  {
    title: "Project 2: GOGO GET AI",
    url: "https://gogoget.ai/",
    columns: [
      [
        {
          image: "/portfolio/sample-1.png",
          title: "Overview",
          description: "Concept exploration",
        },
        {
          image: "/portfolio/sample-2.png",
          title: "Style Guide",
          description: "Visual system",
        },
      ],
      [
        {
          image: "/portfolio/sample-3.png",
          title: "Applications",
          description: "Brand usage",
        },
      ],
      [
        {
          image: "/portfolio/sample-4.png",
          title: "Results",
          description: "Client deliverables",
        },
      ],
    ],
  },
];

// Column component
const Column = ({ data, onImageClick }: any) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item: any, i: number) => (
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

// Main component
const Main = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => setSelectedImage(img);
  const handleCloseDrawer = () => setSelectedImage(null);

  return (
    <Box>
      {projects.map((project, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" fontWeight={700}>
                {project.title}
              </Typography>
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
                  },
                  mt: 0.5,
                  fontSize: "0.875rem",
                }}
              >
                {project.url.replace(/^https?:\/\//, "")}
              </Typography>
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

      {/* Drawer */}
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
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
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
