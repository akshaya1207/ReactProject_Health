import React, { useState } from 'react';

function Patient() {
  const [patients, setPatients] = useState([
    { firstName: 'Ram', lastName: 'Kumar', email: 'ram@gmail.com', contact: '7896543340', password: 'ram123' },
    { firstName: 'Dhanu', lastName: 'Kumar', email: 'dhanu@gmail.com', contact: '7896543210', password: 'dhanu123' },
    { firstName: 'Anish', lastName: 'Kumar', email: 'anish@gmail.com', contact: '7896543256', password: 'anish123' },
    { firstName: 'Sita', lastName: 'Patel', email: 'sita.patel@gmail.com', contact: '7896549870', password: 'sita123' },
    { firstName: 'Gita', lastName: 'Sharma', email: 'gita.sharma@gmail.com', contact: '7896548765', password: 'gita123' },
    { firstName: 'Raj', lastName: 'Singh', email: 'raj.singh@gmail.com', contact: '7896545432', password: 'raj123' },
    { firstName: 'Meera', lastName: 'Rani', email: 'meera.rani@gmail.com', contact: '7896546543', password: 'meera123' },
    { firstName: 'Amit', lastName: 'Jha', email: 'amit.jha@gmail.com', contact: '7896544321', password: 'amit123' },
    { firstName: 'Pooja', lastName: 'Verma', email: 'pooja.verma@gmail.com', contact: '7896543219', password: 'pooja123' },
    { firstName: 'Ravi', lastName: 'Kumar', email: 'ravi.kumar@gmail.com', contact: '7896543456', password: 'ravi123' },
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.contact.includes(searchQuery)
    );
  });

  return (
    <div className="admin-dashboard-p">
      <div className="header-p">
        <h1>Patient List</h1>
      </div>
      <div className="content-p">
        <div className="right-panel-p">
          <div className="search-bar-p">
            <input
              type="text"
              placeholder="Enter Name/Email/Contact"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button>Search</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.email}>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.email}</td>
                    <td>{patient.contact}</td>
                    <td>{patient.password}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No patients found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Patient;
