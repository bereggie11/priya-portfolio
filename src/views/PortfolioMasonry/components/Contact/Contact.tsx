/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Contact = (): JSX.Element => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          <Typography fontWeight={700} variant={"h5"} gutterBottom>
            Want to collaborate or hire me?
          </Typography>
          <Typography>
            Email me at priyaramakrishnan0317@gmail.com or call 913-220-0358
          </Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="mailto:priyaramakrishnan0317@gmail.com"
          >
            Let’s Talk
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
