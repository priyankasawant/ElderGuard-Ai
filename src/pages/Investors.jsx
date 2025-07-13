import React from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";

const marketFacts = [
  "The global AI in emergency response market is projected to grow rapidly over the next decade.",
  "AI can reduce emergency response times by up to 30%.",
  "Increasing adoption of AI-powered solutions in healthcare and elder care.",
];

const investors = ["Investor A", "Investor B", "Investor C", "Investor D", "Investor E"];

export default function Investors() {
  return (
    <Container sx={{ mt: 4, maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        Investors & Market Facts
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Market Facts
        </Typography>
        <List>
          {marketFacts.map((fact, i) => (
            <ListItem key={i} sx={{ display: "list-item", pl: 2 }}>
              {fact}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Our Investors
        </Typography>
        <List>
          {investors.map((inv, i) => (
            <ListItem key={i}>{inv}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
