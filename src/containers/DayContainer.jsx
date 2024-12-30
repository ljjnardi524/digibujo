// DayContainer.js
import React from 'react';
import Day from './../views/Day';  // Importa el componente Day

const DayContainer = ({ days }) => {
    return (
        <div className="days-container">
            {days.map((day, index) => (
                <Day key={index} dayNumber={day} />
            ))}
        </div>
    );
};

export default DayContainer;
