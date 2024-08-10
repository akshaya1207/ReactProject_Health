import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import {
  ContactMail,
  People,
  LocalHospital,
  EventNote,
  Person
} from '@mui/icons-material';
import '../../Assets/Adminsidebar.css';

const Adminsidebar = () => {
  return (
    <div className="dashboard-container-d">
      <List component="nav">
        <ListItem button component={Link} to="/patient">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Patient List" />
        </ListItem>
        <ListItem button component={Link} to="/doctorlist">
          <ListItemIcon>
            <LocalHospital />
          </ListItemIcon>
          <ListItemText primary="Doctor List" />
        </ListItem>
        <ListItem button component={Link} to="/manage">
          <ListItemIcon>
            <ContactMail />
          </ListItemIcon>
          <ListItemText primary="Manage Doctor" />
        </ListItem>
        <ListItem button component={Link} to="/appdetail">
          <ListItemIcon>
            <EventNote />
          </ListItemIcon>
          <ListItemText primary="Appointment Details" />
        </ListItem>
        <ListItem button component={Link} to="/doctor">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Doctor" />
        </ListItem>
      </List>
    </div>
  );
};

export default Adminsidebar;
