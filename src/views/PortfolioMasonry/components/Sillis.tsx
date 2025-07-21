import React from "react";
import { Box, Grid, Typography, Chip, Container } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LanguageIcon from "@mui/icons-material/Language";
import PsychologyIcon from "@mui/icons-material/Psychology";

const skills = [
  { label: "UI/UX Design", icon: <DesignServicesIcon /> },
  { label: "ReactJS", icon: <CodeIcon /> },
  { label: "Figma", icon: <DesignServicesIcon /> },
  { label: "HTML/CSS", icon: <LanguageIcon /> },
];

const Skills = () => (
  <Container>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Core Skills
    </Typography>
    <Grid container spacing={2}>
      {[
        { icon: <DesignServicesIcon />, label: "Graphic Design" },
        { icon: <DesignServicesIcon />, label: "Branding" },
        { icon: <DesignServicesIcon />, label: "Typography & Layout" },
        { icon: <PsychologyIcon />, label: "UX Design Principles" },
        { icon: <CodeIcon />, label: "Wireframing & Prototyping" },
        { icon: <LanguageIcon />, label: "HTML/CSS (Basic)" },
        { icon: <DesignServicesIcon />, label: "Adobe CC, Figma, Canva" },
        {
          icon: <PsychologyIcon />,
          label: "E-learning & Instructional Design",
        },
        {
          icon: <DesignServicesIcon />,
          label: "Design Systems & Accessibility",
        },
      ].map((skill, i) => (
        <Grid item key={i}>
          <Chip
            icon={skill.icon}
            label={skill.label}
            color="primary"
            variant="outlined"
            size="small"
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skills;
