import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Avatar, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import '../Assets/Specialists.css'; 
import MapComponent from './Map'; 

const doctors = [
  {
    name: 'Dr. John Doe',
    hospital: 'City Hospital',
    rating: 4.5,
    avatar: 'https://i.pinimg.com/474x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg',
    qualifications: 'MBBS, MD Cardiology',
    experience: '10 years',
  },
  {
    name: 'Dr. Jane Smith',
    hospital: 'General Hospital',
    rating: 4.0,
    avatar: 'https://i.pinimg.com/474x/eb/18/12/eb1812a1d59da3a32f70429dfa35b2fb.jpg',
    qualifications: 'MBBS, MD Neurology',
    experience: '8 years',
  },
  {
    name: 'Dr. Shankar Raj',
    hospital: 'Medical College',
    rating: 3.9,
    avatar: 'https://i.pinimg.com/474x/10/8f/2b/108f2b9603a0752cf62b21afbe7e9354.jpg',
    qualifications: 'MBBS, MD Pediatrics',
    experience: '9 years',
  },
  {
    name: 'Dr. Mithila Kumar',
    hospital: 'Vimal Hospital',
    rating: 4.2,
    avatar: 'https://i.pinimg.com/474x/9b/3c/11/9b3c113f2f408edf63034ca87c411382.jpg',
    qualifications: 'MBBS, MD Dermatology',
    experience: '11 years',
  },
  {
    name: 'Dr. Lalitha ',
    hospital: 'Special Care Hospital',
    rating: 3.8,
    avatar: 'https://i.pinimg.com/474x/e5/94/30/e594309cdbbb3d3579d09ab24af4674f.jpg',
    qualifications: 'MBBS, MD Geriatrics',
    experience: '10 years',
  },
  {
    name: 'Dr. Vijaya Ratha',
    hospital: 'Innovative Hospital',
    rating: 4.6,
    avatar: 'https://i.pinimg.com/474x/53/86/ff/5386ff34e96b40b9c391118851f69f58.jpg',
    qualifications: 'MBBS, MD Pulmonology',
    experience: '13 years',
  },
  {
    name: 'Dr. Imran Patel',
    hospital: 'Northside Medical Center',
    rating: 4.0,
    avatar: 'https://i.pinimg.com/474x/12/7e/4b/127e4baa1367c1c5189f6cf9b3501a49.jpg',
    qualifications: 'MBBS, MD Psychiatry',
    experience: '9 years',
  },
  {
    name: 'Dr. Priya Desai',
    hospital: 'Sunrise Hospital',
    rating: 4.5,
    avatar: 'https://i.pinimg.com/474x/f5/9e/e4/f59ee4d21909ed6503e89b4a70d91650.jpg',
    qualifications: 'MBBS, MD Obstetrics and Gynecology',
    experience: '11 years',
  },
];

const DoctorProfileCard = ({ doctor }) => {
    return (
        <Card className="doctor-card">
            <Box display="flex" justifyContent="center" marginTop="16px">
                <Avatar src={doctor.avatar} alt={doctor.name} sx={{ width: 100, height: 100 }} />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div" align="center">
                    {doctor.name}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" marginTop="8px">
                    <Rating value={doctor.rating} readOnly precision={0.5} />
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" marginTop="4px">
                    Experience: {doctor.experience}
                </Typography>
                <Box display="flex" justifyContent="center" marginTop="16px">
                    <Link to="/profile1">
                        <Button variant="contained" color="primary">
                            Book
                        </Button>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};

const DoctorProfilePage = () => {
    return (
        <div className="doctor-profile-page">
            <div className="doctor-list">
                {doctors.map((doctor, index) => (
                    <DoctorProfileCard doctor={doctor} key={index} />
                ))}
            </div>
            <div className="map-container">
                <MapComponent />
            </div>
        </div>
    );
};

export default DoctorProfilePage;
