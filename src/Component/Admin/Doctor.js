import React from 'react';

import '..//..//Assets/doctor.css'
function AppointmentsPage() {
  const appointmentsData = [
    {
      firstName: 'Kishan',
      lastName: 'Lal',
      gender: 'Male',
      email: 'kishansmart0@gmail.com',
      contact: '8838489464',
      appointmentDate: '2020-02-14',
      appointmentTime: '10:00:00',
      currentStatus: 'Cancelled',
      action: 'Cancelled by You'
    },
    {
      firstName: 'Kishan',
      lastName: 'Lal',
      gender: 'Male',
      email: 'kishansmart0@gmail.com',
      contact: '8838489464',
      appointmentDate: '2020-02-26',
      appointmentTime: '15:00:00',
      currentStatus: 'Cancelled',
      action: 'Cancelled by Patient'
    },
    
  ];

  return (
    <div className="admin-dashboard-p">
      <div className="header-p">
       
       <div className="search-bar-p">
          <input type="text" placeholder="Enter contact number" />
          <button>Search</button>
        </div>
      </div>
      <div className="content-p">
        <div className="welcome-message">
          Welcome Ganesh
        </div>
        <div className="left-panel-p">
          <ul>
            <li>Dashboard</li>
            <li className="active">Appointments</li>
            {/* Add other navigation items */}
          </ul>
        </div>
        <div className="right-panel-p">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Current Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.firstName}</td>
                  <td>{appointment.lastName}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contact}</td>
                  <td>{appointment.appointmentDate}</td>   

                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.currentStatus}</td>
                  <td>{appointment.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentsPage;