// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
// import '..//..//Assets//doctorlist.css';
// import AddDoctorForm from './Managedoc';


// function DoctorsList() {
//   const [doctors, setDoctors] = useState([
//     { firstName: 'John', lastName: 'Doe', email: 'john.doe@hospital.com', fees: 200, contact: '123-456-7890' },
//     // Add more doctors as needed
//   ]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [doctorToEdit, setDoctorToEdit] = useState(null);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredDoctors = doctors.filter((doctor) => {
//     return (
//       doctor.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doctor.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doctor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       doctor.contact.includes(searchQuery)
//     );
//   });

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleAddDoctor = (newDoctor) => {
//     setDoctors([...doctors, { ...newDoctor, firstName: newDoctor.firstName, lastName: newDoctor.lastName, fees: newDoctor.consultancyFees }]);
//   };

//   const handleEditDoctor = (updatedDoctor) => {
//     setDoctors(doctors.map(doctor => doctor.email === updatedDoctor.email ? updatedDoctor : doctor));
//     setDoctorToEdit(null);
//   };

//   const handleDeleteDoctor = (email) => {
//     setDoctors(doctors.filter(doctor => doctor.email !== email));
//     setDoctorToEdit(null);
//   };

//   return (
//     <div className="admin-dashboard-m">
//       <nav>
//         <ul>
//           <li><Link to='/doctorlist'>Doctor List</Link></li>
//           <li><Link to='/patientlist'>Patient List</Link></li>
//           <li className="profile-menu">
//             <IconButton onClick={handleMenuOpen}>
//               <Avatar alt="Profile Picture" src="https://i.pinimg.com/474x/a3/f4/bc/a3f4bc0dc7d1b030b782c62d7a4781cf.jpg" />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={handleMenuClose}>
//                 <Link to="/profile">Profile</Link>
//               </MenuItem>
//               <MenuItem onClick={handleMenuClose}>
//                 <Link to="/logout">Logout</Link>
//               </MenuItem>
//             </Menu>
//           </li>
//         </ul>
//       </nav>
//       <div className="content-m">
//         <div className="right-panel-m">
//           <div className="search-bar-m">
//             <input
//               type="text"
//               placeholder="Enter Doctor Name/Email/Contact"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             <button>Search</button>
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Doctor Name</th>
//                 <th>Email</th>
//                 <th>Fees</th>
//                 <th>Contact</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDoctors.length > 0 ? (
//                 filteredDoctors.map((doctor) => (
//                   <tr key={doctor.email}>
//                     <td>{doctor.firstName} {doctor.lastName}</td>
//                     <td>{doctor.email}</td>
//                     <td>${doctor.fees}</td>
//                     <td>{doctor.contact}</td>
//                     <td>
//                       <button onClick={() => setDoctorToEdit(doctor)}>Edit</button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5">No doctors found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <AddDoctorForm
//         onAddDoctor={handleAddDoctor} 
//         onEditDoctor={handleEditDoctor} 
//         doctorToEdit={doctorToEdit}
//         onDeleteDoctor={handleDeleteDoctor}
//       />
//     </div>
//   );
// }

// export default DoctorsList;
