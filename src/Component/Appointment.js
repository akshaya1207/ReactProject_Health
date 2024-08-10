import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Grid, Typography, Container, Paper, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Assets/Appointment.css';
import chair from '../images/chair.png';
import Sidebar from './sidebar';

const timeSlots = [
  { time: '09:00 AM - 09:30 AM', procedure: 'General Checkup', availableSpaces: 5 },
  { time: '10:00 AM - 10:30 AM', procedure: 'Consultation', availableSpaces: 3 },
  { time: '11:00 AM - 11:30 AM', procedure: 'Physical Therapy', availableSpaces: 2 },
  { time: '01:00 PM - 01:30 PM', procedure: 'Dental Cleaning', availableSpaces: 4 },
  { time: '02:00 PM - 02:30 PM', procedure: 'Vaccination', availableSpaces: 6 },
  { time: '03:00 PM - 03:30 PM', procedure: 'Follow-up', availableSpaces: 1 },
];

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    reset(); 
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    handleCloseForm();
  };

  return (
    <Container className="appointment-container-b" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <div className="content-overlay-b">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
           <Sidebar/>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h4" component="h2" gutterBottom style={{ color: '#0ed0b9' }}>
              Book an Appointment
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <div className="calendar-wrapper-b">
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                    calendarClassName="custom-calendar-b"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="image-container-b">
                <Box style={{ textAlign: 'center' }}>
                  <img
                    src={chair}
                    alt="Appointment"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}
              </Typography>
              <div className="time-slots-container-b">
                {timeSlots.map((slot, index) => (
                  <Box
                    key={index}
                    className={`slot-container-b ${selectedTime === slot ? 'selected-b' : 'unselected-b'}`}
                    onClick={() => handleTimeSelect(slot)}
                  >
                    <Typography variant="body1">{slot.time}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {slot.procedure}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Available Spaces: {slot.availableSpaces}
                    </Typography>
                    <Button className="gradient-button-b">Select</Button>
                  </Box>
                ))}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Dialog open={isFormOpen} onClose={handleCloseForm} maxWidth="sm" fullWidth>
        <DialogTitle>Appointment Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              {...register('name', { required: 'Name is required' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              margin="dense"
              id="contact"
              label="Contact Number"
              type="tel"
              fullWidth
              variant="outlined"
              {...register('contact', { required: 'Contact number is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid contact number' } })}
              error={!!errors.contact}
              helperText={errors.contact?.message}
            />
            <FormControl fullWidth margin="dense" variant="outlined">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                {...register('gender', { required: 'Gender is required' })}
                label="Gender"
                error={!!errors.gender}
                helperText={errors.gender?.message}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="dob"
              label="Date of Birth"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              {...register('dob', { required: 'Date of Birth is required' })}
              error={!!errors.dob}
              helperText={errors.dob?.message}
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="number"
              fullWidth
              variant="outlined"
              {...register('age', { required: 'Age is required', min: { value: 1, message: 'Age must be greater than 0' } })}
              error={!!errors.age}
              helperText={errors.age?.message}
            />
            <TextField
              margin="dense"
              id="problem"
              label="Condition"
              type="text"
              fullWidth
              variant="outlined"
              {...register('problem', { required: 'Condition is required' })}
              error={!!errors.problem}
              helperText={errors.problem?.message}
            />
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              Selected Time: {selectedTime ? `${selectedTime.time} (${selectedTime.procedure})` : 'None'}
            </Typography>
            <DialogActions>
              <Button onClick={handleCloseForm} color="primary">
                Cancel
              </Button>
           <Link to='/payment'>   <button type="submit" color="primary" className='buttonapp' style={{backgroundColor:"#00796b"}}>
                Submit
              </button></Link>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AppointmentPage;
