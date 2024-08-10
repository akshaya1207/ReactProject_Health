import React from 'react';
import { FaHome, FaUserMd, FaCalendarCheck, FaInfoCircle, FaEnvelope, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Assets/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebarf">
            <ul className="sidebarf-nav">
                <li className="sidebarf-item">
                    <Link to="/Home" className="sidebarf-link">
                        <FaHome className="sidebarf-icon" />
                        Home
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/profile" className="sidebarf-link">
                        <FaUserMd className="sidebarf-icon" />
                        Doctors
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/Appointment" className="sidebarf-link">
                        <FaCalendarCheck className="sidebarf-icon" />
                        Appointments
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/Aboutpage" className="sidebarf-link">
                        <FaInfoCircle className="sidebarf-icon" />
                        About Us
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/Contact" className="sidebarf-link">
                        <FaEnvelope className="sidebarf-icon" />
                        Contact
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/Faq" className="sidebarf-link">
                        <FaQuestionCircle className="sidebarf-icon" />
                        FAQ
                    </Link>
                </li>
                <li className="sidebarf-item">
                    <Link to="/page" className="sidebarf-link">
                        <FaSignOutAlt className="sidebarf-icon" />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
