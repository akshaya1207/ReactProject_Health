import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container, Button } from '@mui/material';
import { Search, Schedule, LocalHospital } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import baby from '../images/baby.png';
import '../Assets/Aboutcard.css';
import Sidebar from './sidebar';


const guides = [
  {
    title: 'Diets',
    description: 'Which are the best diets?',
    image: 'https://images.pexels.com/photos/3985872/pexels-photo-3985872.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    link: '/Health'
  },
  {
    title: 'Primary care',
    description: 'What is primary care? Understanding the basics',
    image: 'https://images.pexels.com/photos/4586740/pexels-photo-4586740.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/Health2'
  },
  {
    title: 'Antibiotics',
    description: 'Can antibiotics make you feel tired?',
    image: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/Health3'
  },
  {
    title: 'Mental Wellness',
    description: 'Seasonal depression: Symptoms & how to fight it',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/Health4'
  },
  {
    title: 'Blood pressure',
    description: 'How to reduce high blood pressure?',
    image: 'https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/Health5'
  },
  {
    title: 'Cholesterol',
    description: 'Diet and lifestyle changes for treating high triglycerides',
    image: 'https://images.pexels.com/photos/4247816/pexels-photo-4247816.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/Health6'
  }
];

const services = [
  {
    icon: <Search style={{ fontSize: 50, color: '#00796b' }} />,
    title: 'Recommendations',
    description: 'Search for doctors based on specialty and location. Access ratings and reviews from trusted platforms.',
  },
  {
    icon: <Schedule style={{ fontSize: 50, color: '#00796b' }} />,
    title: 'Consultation Booking',
    description: 'Book appointments with doctors directly through our platform, including options for virtual consultations.',
  },
  {
    icon: <LocalHospital style={{ fontSize: 50, color: '#00796b' }} />,
    title: 'Healthcare Provider Profiles',
    description: 'View profiles of doctors, qualifications, experience, and practice information.',
  },
];

const Aboutpage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <div className="containera">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <img
              src={baby}
              alt="Healthy Baby"
              className="img-hover"
              style={{
                width: '70%',
                height: '300px',
                borderRadius: '8px',
                marginLeft: '150px',
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h1" className="typographya-h1" style={{ marginLeft: '80px' }}>
              Exceptional Health Care, on Your Terms
            </Typography>
            <Typography variant="body1" className="typographya-body" style={{ marginLeft: '45px' }}>
              "Spotlight on Health" is a web platform designed to make it easy for users to find top-rated doctors nearby.
              Using geolocation technology, we provide a streamlined search process that connects users with highly-rated specialists
              based on verified patient reviews. Our platform also offers information on available consultation options, including in-person visits,
              virtual consultations, and hybrid models. Our goal is to empower users to make informed health decisions and navigate the healthcare system more efficiently.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="button-hover"
              style={{ marginLeft: '250px', fontSize: '13px' }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className="containera" >
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" className="typographya-h2">
              Services Provided by Spotlight on Health
            </Typography>
          </Grid>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="servicea-card-hover">
                <div style={{ marginBottom: '10px', color: '#00796b', fontSize: '40px' }}>
                  {service.icon}
                </div>
                <div>
                  <Typography variant="h6" component="h3" className="typographya-service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="typographya-service-description">
                    {service.description}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="containera" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
           <Sidebar/>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" component="h2" className="typographya-h2">
              Health Guides
            </Typography>
            <Grid container spacing={4}>
              {guides.map((guide, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className="guidea-card-hover">
                    <CardMedia
                      component="img"
                      height="140"
                      image={guide.image}
                      alt={guide.title}
                      style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div" style={{ marginBottom: '10px' }}>
                        <Link to={guide.link} style={{ textDecoration: 'none', color: '#00796b', fontWeight: 'bold' }}>
                          {guide.title}
                        </Link>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {guide.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Aboutpage;
