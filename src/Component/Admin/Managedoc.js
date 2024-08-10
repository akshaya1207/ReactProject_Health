import React, { useState, useEffect } from 'react';
import '..//..//Assets//Manage.css';
import Rating from '@mui/material/Rating';
import { TextField, Button, Box } from '@mui/material';

function AddDoctorForm({ onAddDoctor, onEditDoctor, doctorToEdit, onDeleteDoctor }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialty: '',
    education: '',
    reviewStars: 0, 
    experience: '',
    contact: ''
  });

  const isEditMode = doctorToEdit !== null && doctorToEdit !== undefined;

  useEffect(() => {
    if (isEditMode && doctorToEdit) {
      setFormData({
        firstName: doctorToEdit.firstName || '',
        lastName: doctorToEdit.lastName || '',
        specialty: doctorToEdit.specialty || '',
        education: doctorToEdit.education || '',
        reviewStars: doctorToEdit.reviewStars || 0,
        experience: doctorToEdit.experience || '',
        contact: doctorToEdit.contact || ''
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        specialty: '',
        education: '',
        reviewStars: 0,
        experience: '',
        contact: ''
      });
    }
  }, [doctorToEdit, isEditMode]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, reviewStars: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      onEditDoctor({ ...doctorToEdit, ...formData });
    } else {
      onAddDoctor(formData);
    }
    setFormData({
      firstName: '',
      lastName: '',
      specialty: '',
      education: '',
      reviewStars: 0,
      experience: '',
      contact: ''
    });
  };

  const handleDelete = () => {
    if (doctorToEdit && doctorToEdit.email) {
      onDeleteDoctor(doctorToEdit.email);
    }
    setFormData({
      firstName: '',
      lastName: '',
      specialty: '',
      education: '',
      reviewStars: 0,
      experience: '',
      contact: ''
    });
  };

  return (
    <div className="add-doctor-form">
      <div className="content-e">
        <div className="right-panel-e">
          <form onSubmit={handleSubmit}>
            <div className="form-group-e">
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <div className="form-group-e">
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <div className="form-group-e">
              <TextField
                label="Specialty"
                variant="outlined"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <div className="form-group-e">
              <TextField
                label="Education"
                variant="outlined"
                name="education"
                value={formData.education}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <div className="form-group-e">
              <label htmlFor="reviewStars">Review Stars:</label>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating
                  name="reviewStars"
                  value={formData.reviewStars}
                  onChange={handleRatingChange}
                  precision={0.5}
                />
              </Box>
            </div>
            <div className="form-group-e">
              <TextField
                label="Experience"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <div className="form-group-e">
              <TextField
                label="Contact Number"
                variant="outlined"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </div>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isEditMode ? 'Update Doctor' : 'Add Doctor'}
            </Button>
            {isEditMode && <Button type="button" onClick={handleDelete} variant="outlined" color="error" fullWidth>
              Delete Doctor
            </Button>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDoctorForm;
