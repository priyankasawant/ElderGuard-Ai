import React from "react";
import { Container, Typography, Box } from "@mui/material";
import InvestorSlider from "../components/InvestorSlider";
import UploadSection from "../components/VideoUpload";
import PricingTable from "../components/PricingCard";
import ChatbotPlaceholder from "../components/ChatbotPlaceholder";

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to ElderGuard-Ai
      </Typography>
      <InvestorSlider />

      <Box sx={{ my: 6 }}>
        <UploadSection />
      </Box>

      <Box sx={{ my: 6 }}>
        <PricingTable />
      </Box>

      <Box sx={{ my: 6 }}>
        <ChatbotPlaceholder />
      </Box>
    </Container>
  );
}
