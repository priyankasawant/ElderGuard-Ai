import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const investors = [
  "Investor A",
  "Investor B",
  "Investor C",
  "Investor D",
  "Investor E",
];

export default function InvestorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Our Investors
      </Typography>
      <Slider {...settings}>
        {investors.map((name, i) => (
          <Paper key={i} sx={{ p: 3, mx: 1, textAlign: "center" }}>
            {name}
          </Paper>
        ))}
      </Slider>
    </Box>
  );
}
