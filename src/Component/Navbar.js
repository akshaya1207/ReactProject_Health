import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useState, useRef } from 'react';

import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import Login from './Login';
import Signup from './Signup';
import Faq from './Faq';
import Home from './Home';
import Aboutpage from './Aboutpage';
import Health from '../Assets/Health/Health';
import Contact from './Contact';
import Health2 from '../Assets/Health/Health2';
import Health3 from '../Assets/Health/Health3';
import Health4 from '../Assets/Health/Health4';
import Health5 from '../Assets/Health/Health5';
import Health6 from '../Assets/Health/Health6';
import AppointmentPage from './Appointment';
import DoctorProfilePage from './Specialists';
import Survey from './Survey';
import MapComponent from './Map';
import AdminDashboard from './Admin/Admin';
import Patient from './Admin/PatientList';
import DoctorsList from './Admin/Doctorlist';
import Adminsidebar from './Admin/Adminsidebar';
import Appdetail from './Admin/detailsapp';
import AddDoctorForm from './Admin/Managedoc';
import AppointmentsPage from './Admin/Doctor';
import Services from './Service';
import Profile from './profile';
import Footer from './Footer';
import PaymentPage from './payment';
import Page from './Page';
import Sidebar from './sidebar';
import '../Assets/Navbar.css';
import User from './User';

function Navbar() {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const reviewsRef = useRef(null);
  const location = useLocation();

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDashboardVisibility = () => {
    setIsDashboardVisible(!isDashboardVisible);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDropdownOpen = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };

  const hideNavbar = location.pathname === '/Login' || location.pathname === '/Signup'
    || location.pathname === '/Health' || location.pathname === '/Health2' || location.pathname === '/Health3'
    || location.pathname === '/Health4' || location.pathname === '/Health5' || location.pathname === '/Health6'
    || location.pathname === '/book' || location.pathname === '/Appointment' || location.pathname === '/Faq'
    || location.pathname === '/Contact' || location.pathname === '/admin' || location.pathname === '/Aboutpage' ||
   location.pathname === '/patient' ||   location.pathname === '/page'||   location.pathname === '/doctorlist'
  ;
  return (
    <div>
      {!hideNavbar && (
        <nav>
          <div className="navbarb-container">
            <Link to='/Home'>
              {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
            </Link>
            <ul className='color'>
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/profile'>Doctor</Link> </li>
               <li><Link to='/Appointment'>Appointments</Link></li>
              <li><Link to='/Faq'>Faq</Link></li>
              <li><Link to='/Aboutpage'>About Us</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li className="profile-menu">
                <li>
                        <IconButton onClick={handleMenuOpen}>
                            <Avatar alt="Profile Picture" src="https://i.pinimg.com/474x/a3/f4/bc/a3f4bc0dc7d1b030b782c62d7a4781cf.jpg" />
                            <div className="dropdown">
                              <li><Link to='/user'>Profile</Link> </li>
                            <li><Link to='/page'>Logout</Link></li>
                            </div>
                        </IconButton>
                        </li>
                    </li>
            </ul>
          </div>
        </nav>
      )}

      {isDashboardVisible && (
        <div className="dashboard-container">
          <Sidebar />
        </div>
      )}

      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path="/" element={<Navigate to="/page" />} />
        <Route path="/Login" element={<Login name="Name:" password="Password:" />} />
        <Route path="/Home" element={<Home servicesRef={servicesRef} galleryRef={galleryRef} reviewsRef={reviewsRef} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Health2" element={<Health2 />} />
        <Route path="/Health3" element={<Health3 />} />
        <Route path="/Health4" element={<Health4 />} />
        <Route path="/Health5" element={<Health5 />} />
        <Route path="/Health6" element={<Health6 />} />
        <Route path="/Appointment" element={<AppointmentPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/profile" element={<DoctorProfilePage />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctorlist" element={<DoctorsList />} />
        <Route path="/adsidebar" element={<Adminsidebar />} />
        <Route path="/Appdetail" element={<Appdetail />} />
        <Route path="/manage" element={<AddDoctorForm />} />
        <Route path='/doctor' element={<AppointmentsPage />} />
        <Route path='/Service' element={<Services />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/profile1' element={<Profile />} />
        <Route path='/profile1' element={<Profile />} />
        <Route path='/profile/insurance' element={<Profile />} />
        <Route path="/page" element={<Page />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default Navbar;
