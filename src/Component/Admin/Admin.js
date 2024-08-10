import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../Assets/Admin.css'; 

function AdminDashboard() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="content-s">
        
        <div className="welcome-message-s">
          <h5>WELCOME ADMIN</h5>
        </div>
        
        <div className="right-panel-s">
          <div className="card-s">
            <div className="card-icon-s">
              <i className="fas fa-users"></i>
            </div>
            <h2>Doctor List</h2>
            <Link to='/doctorlist'><button>View Doctors</button></Link>
          </div>

          <div className="card-s">
            <div className="card-icon-s">
              <i className="fas fa-users"></i>
            </div>
            <h2>Patient List</h2>
            <Link to='/patient'><button>View Patients</button></Link>
          </div>

          <div className="card-s">
            <div className="card-icon-s">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h2>Appointment Details</h2>
            <Link to='/Appdetail'><button>View Appointments</button></Link>
          </div>

          <div className="card-s">
            <div className="card-icon-s">
              <i className="fas fa-user-plus"></i>
            </div>
            <h2>Manage Doctors</h2>
            <Link to='/manage'><button>Add Doctors</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
