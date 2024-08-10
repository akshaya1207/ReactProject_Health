import React, { useState } from 'react';
import '..//..//Assets//Appdetails.css';

function Appdetail() {
  const [appointments, setAppointments] = useState([
    { firstName: 'Ram', lastName: 'Kumar', email: 'ram@gmail.com', contact: '7896543210', doctor: 'Arun', fees: 600, appointmentDate: '2019-09-22', appointmentTime: '10:00:00' },
    
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    return appointment.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="admin-dashboard-i">
      
       
      <div className="content-i">
        
        <div className="right-panel-i">
          <div className="search-bar-i">
            <input type="text" placeholder="Enter Contact" value={searchQuery} onChange={handleSearch} />
            <button>Search</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Doctor Name</th>
                <th>Consultancy Fees</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.email}>
                  <td>{appointment.firstName}</td>
                  <td>{appointment.lastName}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.contact}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.fees}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Appdetail;