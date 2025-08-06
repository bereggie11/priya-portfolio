import React from "react";
import { Box, Typography, Avatar, useTheme, Link, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Hero = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      {/* Cover Image */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 220, sm: 300, md: 400 },
          backgroundImage: `url(/personal/cover.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Profile Section */}
      <Box
        sx={{
          position: "relative",
          px: { xs: 2, sm: 4 },
          pb: 4,
          bgcolor: theme.palette.background.paper,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        {/* Profile Avatar */}
        <Avatar
          src="/personal/pri-2025.jpeg"
          alt="Priya Ramakrishnan"
          sx={{
            width: 150,
            height: 150,
            border: "4px solid white",
            position: "absolute",
            top: -105,
            left: { xs: 16, sm: 32 },
            boxShadow: 3,
          }}
        />

        {/* Text Info */}
        <Box sx={{ pt: 8, pl: { xs: 2, sm: 2 }, pr: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            PRIYA R
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontWeight={500}
            sx={{ mt: 0.5 }}
          >
            Graphic Designer | UI/UX Designer | Brand Designer | Photographer
          </Typography>

          {/* Location */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Overland Park, Kansas, USA
            </Typography>
          </Stack>

          {/* Contact Info with Icons */}
          <Stack direction="column" spacing={1} sx={{ mt: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LinkedInIcon fontSize="small" />
              <Link
                href="https://www.linkedin.com/in/priya-ramakrishnan-43599877"
                target="_blank"
                rel="noopener"
                underline="hover"
                variant="body2"
              >
                linkedin.com/in/priya-ramakrishnan-43599877
              </Link>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <EmailIcon fontSize="small" />
              <Link
                href="mailto:priyaramakrishnan0317@gmail.com"
                underline="hover"
                variant="body2"
              >
                priyaramakrishnan0317@gmail.com
              </Link>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Link href="tel:9132200358" underline="hover" variant="body2">
                913-220-0358
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
