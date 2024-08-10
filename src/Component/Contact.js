import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Box,
  Paper,
  styled,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import { Person, Email, Message } from '@mui/icons-material';

import '../Assets/Contact.css';
import Sidebar from './sidebar';

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  background: 'linear-gradient(145deg, #e0f7fa, #80deea)',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden', // Ensure content does not overflow
}));

const Form = styled('form')(({ theme }) => ({
  '& > *': {
    margin: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show the confirmation dialog
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    // Optionally, reset the form here if needed
  };

  return (
    <Container maxWidth="lg" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
        <Sidebar/>
        </Grid>
        <Grid item xs={12} md={9}>
          <Root elevation={3} className="paperc">
            <Typography
              variant="h4"
              component="h1"
              style={{ fontSize: '2rem', fontWeight: 'bold', color: '#00796b', marginBottom: '20px', textShadow: '2px 2px #80deea' }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: '24px', fontSize: '1rem', color: '#004d40' }}
              gutterBottom
            >
              We'd love to hear from you! Please fill out the form below to get in touch with us.
            </Typography>
            <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                      style: { borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                    }}
                    aria-label="First Name"
                    aria-required="true"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                      style: { borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                    }}
                    aria-label="Last Name"
                    aria-required="true"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                      style: { borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                    }}
                    aria-label="Email"
                    aria-required="true"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={2} // Reduced the number of rows
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Message />
                        </InputAdornment>
                      ),
                      style: { borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                    }}
                    style={{ maxHeight: '100px' }} // Reduced max height
                    aria-label="Message"
                    aria-required="true"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <button className="buttonc" style={{ color: "white", background: "#00796b" }}>
                      Submit
                    </button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          </Root>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your message has been submitted successfully. Thank you for reaching out to us!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactUs;
