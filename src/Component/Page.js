import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faStethoscope, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import '../Assets/page.css';
import { Link } from 'react-router-dom';
import cardio from '../images/cardio.jpg';
import neuro from '../images/neuro.jpg';
import ortho from '../images/ortho.jpg';
import testimony from '../images/testimony.jpg';
import box from '../images/box.jpg';
import Footer from './Footer';

const Page = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-brand">DocLocator</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#about-section">About</a></li>
          <li className="nav-item"><a href="#features-section">Features</a></li>
          <li className="nav-item"><a href="#specialties-section">Specialties</a></li>
          <li className="nav-item"><a href="#testimonials-section">Testimonials</a></li>
          <li className="nav-item"><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      <div id="about-section" className="main-section">
        <div className="text-content">
          <h1>Find Top Medical Services <br /> <span>wherever you are.</span></h1>
          <p>We connect you with top healthcare professionals and facilities worldwide. Your health and safety are our priority.</p>
        </div>
        <div className="image-content">
          <img src={box} alt="Medical Services" />
        </div>
      </div>

      <div id="features-section" className="features-section">
        <div className="feature">
          <FontAwesomeIcon icon={faHeartbeat} className="feature-icon" />
          <h3>Heart Care</h3>
          <p>Top specialists for all heart-related conditions, ensuring your cardiovascular health is in expert hands.</p>
          <a href="#learn-more-heart-care" className="learn-more">Learn More &rarr;</a>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faStethoscope} className="feature-icon" />
          <h3>General Health</h3>
          <p>Access to comprehensive general health services with trusted practitioners for routine check-ups and more.</p>
          <a href="#learn-more-general-health" className="learn-more">Learn More &rarr;</a>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faAmbulance} className="feature-icon" />
          <h3>Emergency Care</h3>
          <p>Fast and reliable emergency care services, available 24/7 to handle urgent medical situations efficiently.</p>
          <a href="#learn-more-emergency-care" className="learn-more">Learn More &rarr;</a>
        </div>
      </div>

      <div id="specialties-section" className="popular-specialties-section">
        <h2>Popular Specialties</h2>
        <div className="specialties-carousel">
          <div className="specialty-card">
            <img src={cardio} alt="Cardiology" />
            <div className="specialty-info">
              <h3>Cardiology</h3>
              <p><span className="location">New York, NY</span> <span className="price">Consultation starting at USD 150</span></p>
              <p>Expert care for heart conditions and diseases.</p>
            </div>
          </div>
          <div className="specialty-card">
            <img src={neuro} alt="Neurology" />
            <div className="specialty-info">
              <h3>Neurology</h3>
              <p><span className="location">Los Angeles, CA</span> <span className="price">Consultation starting at USD 200</span></p>
              <p>Specialized treatment for neurological disorders.</p>
            </div>
          </div>
          <div className="specialty-card">
            <img src={ortho} alt="Orthopedics" />
            <div className="specialty-info">
              <h3>Orthopedics</h3>
              <p><span className="location">Chicago, IL</span> <span className="price">Consultation starting at USD 180</span></p>
              <p>Advanced care for bone and joint issues.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials-section" className="testimonials-section">
        <h2>Testimonials</h2>
        <p>Here’s what some of our satisfied patients are saying about our services. We strive for excellence in healthcare and your feedback motivates us to improve.</p>
        <div className="testimonial">
          <div className="testimonial-quote">
            <p>&ldquo;Exceptional service and professionalism. The medical team was attentive and made sure all my needs were met. Highly recommend!&rdquo;</p>
          </div>
          <div className="testimonial-author">
            <img src={testimony} alt="Jane Doe" />
            <div className="author-info">
              <h4>Jane Doe</h4>
              <p>Patient</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
