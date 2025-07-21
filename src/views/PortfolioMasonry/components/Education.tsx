// import React from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Container,
// } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";

// const Education = () => (
//   <Container>
//     <Typography variant="h4" fontWeight={700} gutterBottom>
//       Education
//     </Typography>
//     <Box marginBottom={2}>
//       <Typography variant="h6">
//         <SchoolIcon fontSize="small" /> Certificate in Fashion Design
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Pearl Academy (Accredited by The Textile Institute, UK) | GPA: 3.7
//       </Typography>
//     </Box>
//     <Box>
//       <Typography variant="h6">
//         <SchoolIcon fontSize="small" /> B.E. in Electrical & Instrumentation
//         Engineering
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Anna University, India | GPA: 3.5
//       </Typography>
//     </Box>
//   </Container>
// );

// export default Education;

import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Divider,
  Link,
  useTheme,
} from "@mui/material";

type EducationItem = {
  name: string;
  logo: string;
  link?: string;
  degree: string;
  dates: string;
  highlights?: string[];
  skills?: string[];
};

const educationData: EducationItem[] = [
  {
    name: "Pearl Academy, Accredited by The Textile Institute, Manchester, United Kingdom",
    logo: "/education/pearl_academy_logo.jpeg",
    degree: "Post-Graduation, Fashion/Apparel Design",
    dates: "May 2012 – May 2014",
    highlights: [
      "Outgoing Student Award",
      "Best Academic Performance Award",
      "Grade: Distinction",
    ],
    skills: [
      "Technical Design",
      "Trend Analysis",
      "Fashion",
      "Graphic Design",
      "Styling",
      "Fashion Consulting",
    ],
  },
  {
    name: "Self-taught",
    logo: "/education/selftaught_logo.jpeg",
    degree: "Design",
    dates: "2006 – 2022",
    highlights: [
      "Adobe Photoshop | Adobe Illustrator | Articulate 360 | Camtasia | Snagit | CLO3D | Blender",
    ],
    skills: ["Articulate Storyline", "Adobe Lightroom"],
  },
  {
    name: "Johnson County Community College",
    logo: "/education/jccc_logo.jpeg",
    degree: "CAD/CADD Drafting and/or Design Technology/Technician",
    dates: "Aug 2019 – Dec 2019",
    skills: ["Gerber Accumark"],
  },
  {
    name: "St. Joseph's College Of Engineering",
    logo: "/education/sjce_logo.jpeg",
    degree:
      "Bachelor's of Engineering, Electronics & Instrumentation Engineering",
    dates: "2006 – 2010",
  },
];

const EducationSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Education
      </Typography>
      {educationData.map((edu, idx) => (
        <Box key={idx} sx={{ display: "flex", mb: 3 }}>
          <Avatar
            src={edu.logo}
            alt={edu.name}
            variant="rounded"
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box flex={1}>
            <Typography variant="subtitle1" fontWeight={600}>
              {edu.link ? (
                <Link href={edu.link} target="_blank" underline="hover">
                  {edu.name}
                </Link>
              ) : (
                edu.name
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {edu.dates}
            </Typography>

            {edu.highlights && (
              <Box component="ul" sx={{ pl: 2, mt: 0, mb: 1 }}>
                {edu.highlights.map((point, i) => (
                  <li key={i}>
                    <Typography variant="body2">{point}</Typography>
                  </li>
                ))}
              </Box>
            )}

            {edu.skills && (
              <Typography variant="body2" fontWeight={500}>
                <strong>Skills:</strong> {edu.skills.join(" · ")}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
      <Divider />
    </Box>
  );
};

export default EducationSection;
