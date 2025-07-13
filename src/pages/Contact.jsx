import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ mt: 4, maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </Container>
  );
}
