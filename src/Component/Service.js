// src/Services.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Accessibility, LocalHospital, MedicalServices, HealthAndSafety } from '@mui/icons-material';

const services = [
  { title: 'Consultation', icon: <Accessibility />, description: 'Expert medical consultation available.' },
  { title: 'Hospitalization', icon: <LocalHospital />, description: 'Comfortable and state-of-the-art hospital facilities.' },
  { title: 'Emergency Services', icon: <MedicalServices />, description: '24/7 emergency medical care.' },
  { title: 'Health Checkups', icon: <HealthAndSafety />, description: 'Routine health checkups and screenings.' }
];

const Services = () => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h4" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper sx={{ padding: 2, textAlign: 'center' }}>
            {service.icon}
            <Typography variant="h6" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body2">
              {service.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Services;
