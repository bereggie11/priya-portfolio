import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

import Main from "layouts/Main";
import Container from "components/Container";
import { Hero, Main as MainSection, Partners, Contact } from "./components";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Sillis";

const PortfolioMasonry = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Main colorInvert={true}>
      <Box position="relative">
        <Hero />
      </Box>

      {/* Core Skills Section */}
      <Container sx={{ m: { xs: 2, md: 2 } }}>
        <Skills />
      </Container>

      <Divider sx={{ my: 4 }} />

      {/* Work Experience Section */}
      <Container sx={{ mt: { xs: 2, md: 2 } }}>
        <Experience />
      </Container>

      <Divider sx={{ my: 4 }} />

      {/* Education Section */}
      <Container sx={{ mt: { xs: 2, md: 2 } }}>
        <Education />
      </Container>

      <Divider sx={{ my: 4 }} />

      {/* Featured Projects / Main Section */}
      <Container sx={{ mt: { xs: 2, md: 2 } }}>
        <MainSection />
      </Container>

      {/* Contact Section */}
      <Box
        position="relative"
        marginTop={{ xs: 6, md: 10 }}
        sx={{ backgroundColor: theme.palette.alternate.main }}
      >
        <Box
          component="svg"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 100.1"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Main>
  );
};

export default PortfolioMasonry;
