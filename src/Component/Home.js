import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Home.css';
import Footer from './Footer';

const locations = ["Gandhipuram", "RS Puram", "Saibaba Colony", "Peelamedu", "Saravanampatti", "Kuniamuthur"];
const conditions = ["Headache", "Flu", "Back Pain", "Diabetes", "Allergy", "Anxiety"];

const Home = () => {
    const [locationInput, setLocationInput] = useState("");
    const [conditionInput, setConditionInput] = useState("");
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [filteredConditions, setFilteredConditions] = useState([]);

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocationInput(value);
        setFilteredLocations(locations.filter(location => location.toLowerCase().includes(value.toLowerCase())));
    };

    const handleConditionChange = (e) => {
        const value = e.target.value;
        setConditionInput(value);
        setFilteredConditions(conditions.filter(condition => condition.toLowerCase().includes(value.toLowerCase())));
    };

    const handleLocationClick = (location) => {
        setLocationInput(location);
        setFilteredLocations([]);
    };

    const handleConditionClick = (condition) => {
        setConditionInput(condition);
        setFilteredConditions([]);
    };

    return (
        <div className="home-container">
            <section className="search-section">
                <div className="video-background">
                    <video autoPlay muted loop className="video">
                        <source src="/5998397-hd_1920_1080_30fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="search-overlay">
                        <div className="search-bar-container">
                            <div className="input-container">
                                <input 
                                    type="text" 
                                    placeholder="Enter Location" 
                                    value={locationInput}
                                    onChange={handleLocationChange}
                                />
                                {filteredLocations.length > 0 && (
                                    <ul className="suggestions">
                                        {filteredLocations.map((location, index) => (
                                            <li key={index} onClick={() => handleLocationClick(location)}>
                                                {location}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="input-container">
                                <input 
                                    type="text" 
                                    placeholder="Enter Condition" 
                                    value={conditionInput}
                                    onChange={handleConditionChange}
                                />
                                {filteredConditions.length > 0 && (
                                    <ul className="suggestions">
                                        {filteredConditions.map((condition, index) => (
                                            <li key={index} onClick={() => handleConditionClick(condition)}>
                                                {condition}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <Link to='/profile'>
                                <button className="search-button">Search</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
