import React, { useState } from 'react';
import { Paper, Grid, Typography, List, ListItem, ListItemText, ListItemIcon, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Rating } from '@mui/material';
import { LocationOn, School, LocalHospital, VerifiedUser } from '@mui/icons-material';
import '../Assets/profile.css'; 
import { Link } from 'react-router-dom';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [email, setEmail] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitReview = () => {
        console.log('Rating:', rating);
        console.log('Review:', review);
        console.log('Email:', email);
        handleClose();
    };

    const handleBookNow = () => {
        console.log('Booking initiated');
    };

    const doctor = {
        name: 'Dr. John Doe',
        description: 'Dr. John Doe is a renowned cardiologist with over 20 years of experience in treating heart diseases. He is committed to providing the best care to his patients.',
        certificates: [
            'Board Certified in Cardiology',
            'Fellowship in Interventional Cardiology',
           
        ],
        education: [
            
            'Residency, Johns Hopkins Hospital',
            'Fellowship, Cleveland Clinic',
        ],
        hospital: 'City Hospital, 123 Main St, Metropolis',
        insurance: [
            'Medicare',
            'Medicaid',
            'Blue Cross Blue Shield',
            'UnitedHealthcare',
        ],
        reviews: [
            { name: 'Jane Smith', comment: 'Excellent doctor, very attentive and knowledgeable.' },
            { name: 'John Brown', comment: 'Great experience, would highly recommend.' },
        ],
    };

    return (
        <div className="profilew-container">
            <Paper elevation={3} className="profilew-paper">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Avatar 
                            src="https://i.pinimg.com/474x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg" 
                            alt="Doctor"
                            className="profilew-avatar"
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4" gutterBottom className="profilew-header">
                            {doctor.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom className="profilew-description">
                            {doctor.description}
                        </Typography>
                    </Grid>
                </Grid>

                <div className="profilew-section-separator"></div>

                <Typography variant="h5" gutterBottom className="profilew-section-header">
                    Certificates and Education
                </Typography>
                <List>
                    {doctor.certificates.map((certificate, index) => (
                        <ListItem key={index} className="profilew-list-item">
                            <ListItemIcon className="profilew-list-item-icon">
                                <VerifiedUser />
                            </ListItemIcon>
                            <ListItemText primary={certificate} />
                        </ListItem>
                    ))}
                    {doctor.education.map((edu, index) => (
                        <ListItem key={index} className="profilew-list-item">
                            <ListItemIcon className="profilew-list-item-icon">
                                <School />
                            </ListItemIcon>
                            <ListItemText primary={edu} />
                        </ListItem>
                    ))}
                </List>

                <div className="profilew-section-separator"></div>

                <Typography variant="h5" gutterBottom className="profilew-section-header">
                    Hospital Location
                </Typography>
                <List>
                    <ListItem className="profilew-list-item">
                        <ListItemIcon className="profilew-list-item-icon">
                            <LocationOn />
                        </ListItemIcon>
                        <ListItemText primary={doctor.hospital} />
                    </ListItem>
                </List>

                <div className="profilew-section-separator"></div>

                <Typography variant="h5" gutterBottom className="profilew-section-header">
                    Insurance Plans Accepted
                </Typography>
                <List>
                    {doctor.insurance.map((plan, index) => (
                        <ListItem key={index} className="profilew-list-item">
                            <ListItemIcon className="profilew-list-item-icon">
                                <LocalHospital />
                            </ListItemIcon>
                            <ListItemText primary={plan} />
                        </ListItem>
                    ))}
                </List>

                <div className="profilew-section-separator"></div>

                <Typography variant="h5" gutterBottom className="profilew-section-header">
                    Reviews
                </Typography>
                <List>
                    {doctor.reviews.map((review, index) => (
                        <ListItem key={index} className="profilew-review-item">
                            <ListItemText
                                primary={<span className="profilew-review-name">{review.name}</span>}
                                secondary={<span className="profilew-review-comment">{review.comment}</span>}
                            />
                        </ListItem>
                    ))}
                </List>
                <div className="profilew-buttons-container">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className="profilew-review-button"
                        onClick={handleClickOpen} style={{backgroundColor:"#3fb59a"}}
                    >
                      Review
                    </Button>
                    <Link to="/Survey">
                        <Button  
                            variant="contained" 
                            color="secondary" 
                            className="profilew-book-button"
                            onClick={handleBookNow}
                        >
                            Book 
                        </Button>
                    </Link>
                </div>
            </Paper>

            <Dialog open={open} onClose={handleClose} aria-labelledby="formw-dialog-title">
                <DialogTitle id="formw-dialog-title">Write a Review</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar 
                                src="https://i.pinimg.com/474x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg" 
                                alt="Doctor"
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">{doctor.name}</Typography>
                        </Grid>
                    </Grid>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        style={{ marginTop: '20px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="review"
                        label="Tell us about your visit"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        style={{ marginTop: '20px' }}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Your Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginTop: '20px' }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitReview} color="primary">
                        Submit Review
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Profile;
