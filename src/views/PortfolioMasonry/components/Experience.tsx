import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const experiences = [
  {
    role: "Graphic Designer, Web & Instructional Design Consultant",
    company: "APSKC",
    logo: "/experience/apskc.png",
    date: "Oct 2021 – Present",
    location: "Overland Park, KS · Remote",
    points: [
      "Created responsive UI wireframes and e-learning modules using Figma, Canva, and Articulate 360",
      "Designed digital marketing assets, brand guidelines, and visual systems aligned with client goals",
      "Increased user engagement by 35%, improved satisfaction by 95%",
      "Reduced revision cycles by 20% through visual consistency and clear direction",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Ensecure Technologies (Freelance)",
    logo: "/experience/ensecure.jpeg",
    date: "Feb 2024 – Feb 2024",
    location: "Remote · India",
    points: [
      "Designed branding assets including logos, flyers, and marketing materials",
      "Maintained brand alignment and delivered high-quality graphics with quick turnaround",
    ],
  },
  {
    role: "Fashion Design Consultant, Digital Designer",
    company: "Gabbana.life",
    logo: "/experience/oar.jpeg",
    date: "May 2014 – Jan 2019",
    location: "Chennai, India",
    points: [
      "Led end-to-end fashion collection design and curated studio deliverables",
      "Created digital artworks and collaborated with embroidery teams",
      "Mentored interns and streamlined production efficiency by 20%",
    ],
  },
  {
    role: "CMS Developer",
    company: "Gabbana.life / OAR (Freelance)",
    logo: "/experience/oar.jpeg",
    date: "Feb 2019 – Apr 2022",
    location: "Chennai, India · Remote",
    points: [
      "Implemented Shopify and Squarespace for digital store presence",
      "Handled layout design and content editing",
    ],
  },
  {
    role: "Online Manager / Fashion Designer",
    company: "Brass Tacks",
    logo: "/experience/brasstacks.jpeg",
    date: "Jul 2014 – Jul 2015",
    location: "Chennai, India",
    points: [
      "Managed Shopify store, inventory and marketing using GoFrugal ERP",
      "Produced promotional photography and represented brand in exhibitions",
    ],
  },
  {
    role: "Content Writer / Fashion Stylist (Intern)",
    company: "Galatta Media",
    logo: "/experience/galatta.jpeg",
    date: "Jun 2013 – Jul 2013",
    location: "Chennai, India",
    points: [
      "Authored fashion reports and conducted celebrity trend analysis",
      "Groomed and styled subjects for shoots and editorials",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Cognizant",
    logo: "/experience/cognizant.jpeg",
    date: "Jul 2010 – Aug 2012",
    location: "Chennai, India",
    points: [
      "Worked on UI/UX wireframes, HTML, and in-house web apps",
      "Delivered prototypes and web interfaces for internal platforms",
    ],
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Work Experience
      </Typography>
      <Timeline
        position={isMdUp ? "alternate" : "right"}
        sx={{
          [`& .MuiTimelineItem-root:before`]: {
            display: isMdUp ? "inline-block" : "none",
          },
        }}
      >
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "transparent" }}>
                {exp.logo ? (
                  <Avatar
                    src={exp.logo}
                    alt={exp.company}
                    sx={{ width: 40, height: 40 }}
                  />
                ) : (
                  <Avatar sx={{ width: 24, height: 24 }}>
                    {exp.company.charAt(0)}
                  </Avatar>
                )}
              </TimelineDot>
              {idx < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" fontWeight={600}>
                {exp.role}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.company} — {exp.date}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {exp.location}
              </Typography>
              <Box component="ul" pl={2} mt={0} mb={2}>
                {exp.points.map((pt, i) => (
                  <Typography key={i} variant="body2">
                    {pt}
                  </Typography>
                ))}
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience;
