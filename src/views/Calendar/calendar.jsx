import React, { useState, useEffect } from "react";
import Day from "../Day";
import './calendar.scss';
import '../../components/commons/CrayonLine';
import CrayonLine from "../../components/commons/CrayonLine";

function Calendar() {
    const [month, setMonth] = useState('January');
    const [year, setYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState(1);
    const [note, setNote] = useState(localStorage.getItem(`note-${selectedDay}-${month}-${year}`));
    const [daysInMonth, setDaysInMonth] = useState(0); // Initialize daysInMonth

    // Calculate the number of days in the current month
    useEffect(() => {
        const days = new Date(year, new Date(`${month} 1`).getMonth() + 1, 0).getDate();
        setDaysInMonth(days);
        setNote(localStorage.getItem(`note-${selectedDay}-${month}-${year}`));
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

    const monthImage = `/images/months/${month.slice(0, 3).toLowerCase()}.png`;

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
        setSelectedDay(1);
    };
    
    const handleNoteChange = (newNote) => {
        // If the note is null, show an empty string
        if (newNote === null) {
            newNote = "";
        }
        setNote(newNote);
        localStorage.setItem(`note-${selectedDay}-${month}-${year}`, newNote);
    };

    return (
        <>
        <div className="calendar-notes-container">
            <div className="notes-section">
                <p>NOTES:</p>
                <div className="day-note">
                    <p>{selectedDay} {month} {year}</p>
                </div>
                <div className="notes-lines">
                    <div className="other-pages-lines">
                        <CrayonLine lineCount={10} />
                        {selectedDay && (
                            <>
                                <textarea
                                    value={note || ""}
                                    onChange={(e) => handleNoteChange(e.target.value)}
                                    placeholder="Write a note..."
                                    className="note-textarea"
                                />
                             </>
                         )}
                    </div>
                </div>
            </div>
            <div className="calendar">
                <div className="calendar-container">
                    <img src="/images/mushrooms-layers/MushroomLayer1.png" 
                        alt="mushroom layer" 
                        className="mushroom-layer1" 
                    />
                    <img src="/images/mushrooms-layers/MushroomLayer2.png"
                        alt="mushroom layer"
                        className="mushroom-layer2"
                    />
                    <img src="/images/mushrooms-layers/MushroomLayer8.png"
                        alt="mushroom layer"
                        className="mushroom-layer8" 
                    />
                    <img 
                        src="/images/calendar-frame.png" 
                        alt="calendar frame" 
                        className="frame" 
                    />
                    <img 
                        src="/images/calendar.png" 
                         alt="calendar" 
                        className="calendar-image" 
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
                        <div className="days-part-left">
                            {firstHalf.map(day => (
                                <div key={day} className="day-container" onClick={() => { 
                                    setSelectedDay(day); console.log(day); 
                                }}>
                                    <Day dayNumber={day} month={month} year={year} />
                                </div>
                            ))}
                        </div>
                        <div className="days-part-right">
                            {secondHalf.map(day => (
                                <div key={day} className="day-container" onClick={() => { 
                                    setSelectedDay(day); 
                                }}>
                                    <Day dayNumber={day} month={month} year={year} />
                                </div>
                            ))}
                        </div>
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
        {/* Button to clear localStorage and reload the page */}
        <div className="calendar-footer">
            <button onClick={() => { localStorage.clear(); window.location.reload(); }}>
                Clear localStorage and reload
            </button>
        </div>
        </>
    );
};

export default Calendar;

