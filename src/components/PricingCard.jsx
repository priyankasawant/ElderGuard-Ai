import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

export default function PricingTable() {
  return (
    <Paper elevation={3} sx={{ maxWidth: 400, p: 4, mx: "auto", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Early Access
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Pay <strong>$50 now</strong> and get this system for life.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Usually $50 per month.
      </Typography>
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </Paper>
  );
}
