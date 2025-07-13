import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About ElderGuard-Ai
      </Typography>
      <Typography>
        ElderGuard-Ai is an innovative AI-powered emergency response system designed to assist elderly individuals with timely and intelligent coaching during emergencies.
      </Typography>
    </Container>
  );
}
