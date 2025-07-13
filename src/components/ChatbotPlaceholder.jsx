import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export default function ChatbotPlaceholder() {
  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        AI Emergency Response Coaching Chatbot
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Coming Soon
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This AI chatbot will provide real-time emergency response coaching, guiding users through critical situations with tailored advice — unlike generic chatbots, it is specialized for emergency scenarios.
      </Typography>
    </Paper>
  );
}
