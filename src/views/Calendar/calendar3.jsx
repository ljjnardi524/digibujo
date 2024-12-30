import React, { useState, useEffect } from "react";
import Day from "../Day"; // Ensure this path is correct
import './calendar.scss';
import CrayonLine from "../../components/commons/CrayonLine"; // Removed unnecessary import

function Calendar3() {
    const [month, setMonth] = useState('January');
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState(1);
    const [note, setNote] = useState("");
    const [daysInMonth, setDaysInMonth] = useState(0);

    // Calculate the number of days in the current month and update the note
    useEffect(() => {
        const days = new Date(year, new Date(`${month} 1`).getMonth() + 1, 0).getDate();
        setDaysInMonth(days);
        const storedNote = localStorage.getItem(`note-${selectedDay}-${month}-${year}`);
        setNote(storedNote || ""); // Set note to empty string if null
    }, [selectedDay, month, year]);

    // Log daysInMonth to check if it's valid
    console.log('Days in month:', daysInMonth);

    // Check for invalid daysInMonth
    if (daysInMonth <= 0) {
        console.error("Invalid daysInMonth:", daysInMonth);
        return <div>Error: Invalid month or year.</div>;
    }

    // Create arrays for the first and second halves of the month
    const firstHalf = Array.from({ length: Math.min(15, daysInMonth) }, (_, i) => i + 1);
    const secondHalf = Array.from({ length: daysInMonth - firstHalf.length }, (_, i) => i + firstHalf.length + 1);

    // Corrected monthImage path
    const monthImage = require(`../../../public/images/months3/${month.slice(0, 3).toLowerCase()}.png`);
    const handleMonthChange = (direction) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        const currentIndex = monthNames.indexOf(month);

        if (direction === 'previous') {
            setMonth(monthNames[(currentIndex - 1 + 12) % 12]);
            if (currentIndex === 0) {
                setYear(year - 1);
            }
        } else if (direction === 'next') {
            setMonth(monthNames[(currentIndex + 1) % 12]);
            if (currentIndex === 11) {
                setYear(year + 1);
            }
        }
        setSelectedDay(1); // Reset selected day when changing month
    };
    
    const handleNoteChange = (newNote) => {
        setNote(newNote || ""); // Set to empty string if null
        localStorage.setItem(`note-${selectedDay}-${month}-${year}`, newNote || "");
    };

        return (
        <>
        <div className="calendar-notes-container">
            <div className="notes-section">
                <p>NOTES:</p>
                <div className="day-note">
                    <div className="other-pages-lines">
                        <CrayonLine lineCount={10} />
                        {selectedDay && (
                            <>
                                <textarea
                                    value={note || ""}
                                    onChange={(e) => handleNoteChange(e.target.value)}
//                                     placeholder="Write a note..."
                                    className="note-textarea"
                                />
                             </>
                         )}
                    </div>
                </div>
            </div>
            <div className="calendar3">
                <div className="calendar-container3">
                    <img 
                        src="/images/calendar3.png" 
                         alt="calendar3" 
                        className="calendar-image3" 
                    />
                    <div 
                        className="navigation previous-top" 
                        onClick={() => handleMonthChange('previous')}
                    />
                    <div 
                        className="navigation previous-bottom" 
                        onClick={() => handleMonthChange('previous')}
                    />
                    <div 
                        className="navigation next-top" 
                        onClick={() => handleMonthChange('next')}
                    />
                    <div 
                        className="navigation next-bottom" 
                        onClick={() => handleMonthChange('next')}
                    />
                    <div className="month-image-container">
                        <img 
                            src={monthImage} 
                            alt={`${month} illustration`} 
                            className="month-image" 
                        />
                    </div>
                    <div className="days-container">
                    </div>
                </div>
            </div>
            <div className="other-pages-section">
                <p>OTHER PAGES:</p>
                <div className="other-pages-lines">
                    <CrayonLine lineCount={10} />
                </div>
            </div>
        </div>
        <div
style={{
height: '100px', // Set height to 300 pixels
maxWidth: '100%', // Set maximum width to 100% of the container
backgroundColor: '##ffffff00',
}}
>
        </div>
        </>
    );
};

export default Calendar3;
