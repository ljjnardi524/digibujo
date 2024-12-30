// pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.scss';

function Home() {
    const [activeIndex, setActiveIndex] = useState(null);

    // Función para manejar el click en los items de la lista
    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);  // Alternar el estado de las flechas
    };

    return (
        <div className="home">
            <div className="choose-elements">
                <img src="images/choose-elements.png" alt="Choose Elements" />
            </div>

            <div className="choose-categories">
                <div className="list-container">
                    {['TRACKING', 'PLANNING', 'PERSONAL'].map((item, index) => (
                        <div
                            key={index}
                            className="list-item"
                            onClick={() => handleItemClick(index)}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <div className="themes-container">
                    <div className="themes-label">THEMES:</div>
                    <div className="theme-circles">
                        <div className="theme-circle-container"><Link to="/calendar" className="theme-circle" /></div>
                        <div className="theme-circle-container"><Link to="/calendar2" className="theme-circle" /></div>
                        <div className="theme-circle-container"><Link to="/calendar3" className="theme-circle" /></div>
                        <div className="theme-circle-container"><Link to="/calendar4" className="theme-circle" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
