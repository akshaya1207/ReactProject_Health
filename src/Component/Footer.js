import React from 'react';
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import '../Assets/Footer.css';

const Footer = () => {
    return (
        <footer className="footert">
            <Container maxWidth="lg">
                <Grid container spacing={4} className="footert-container">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="footert-title">About Us</Typography>
                        <Typography variant="body2" className="footert-about-text">
                            We are a dedicated healthcare provider committed to offering top-notch medical services and ensuring the well-being of our patients.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="footert-title">Quick Links</Typography>
                        <ul className="footert-list">
                            <li><Link href="#" className="footert-link">Home</Link></li>
                            <li><Link to='/Aboutpage' className="footert-link">About Us</Link></li>
                            <li><Link to='/Faq' className="footert-link">Services</Link></li>
                            <li><Link to='/Contact' className="footert-link">Contact</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" className="footert-title">Contact Info</Typography>
                        <ul className="footert-list">
                            <li className="footert-text">123 Main St, Metropolis</li>
                            <li className="footert-text">(123) 456-7890</li>
                            <li className="footert-text">info@healthcare.com</li>
                        </ul>
                        <Typography variant="h6" className="footert-title">Follow Us</Typography>
                        <div className="footert-social-icons">
                            <IconButton href="#" className="footert-icon"><Facebook /></IconButton>
                            <IconButton href="#" className="footert-icon"><Twitter /></IconButton>
                            <IconButton href="#" className="footert-icon"><Instagram /></IconButton>
                            <IconButton href="#" className="footert-icon"><LinkedIn /></IconButton>
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="textSecondary" align="center" className="footert-copy">
                    &copy; {new Date().getFullYear()} Healthcare. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
