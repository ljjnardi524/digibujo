import React, { useState, useEffect } from "react";

function Day({ dayNumber, month, year }) {
    const [note, setNote] = useState("");  // Inicializamos como vacío

    useEffect(() => {
        // Cargar la nota guardada para este día desde localStorage
        const savedNote = localStorage.getItem(`note-${dayNumber}-${month}-${year}`);
        if (savedNote) {
            setNote(savedNote);  // Si existe la nota, cargamos el valor
        } else {
            setNote("");  // Si no hay nota, dejamos el valor vacío
        }
    }, [dayNumber, month, year]);  // Dependemos de dayNumber, mes y año para recargar cuando cambie

    const handleNoteChange = (event) => {
        const newNote = event.target.value;
        setNote(newNote);
        // Guardar la nueva nota en localStorage cuando se modifica
        localStorage.setItem(`note-${dayNumber}-${month}-${year}`, newNote);
    };

    return (
        <div className="day">
            <span>{dayNumber}</span>
            {/* <textarea
                className="day-note"
                value={note}
                onChange={handleNoteChange}
                placeholder="Escribe una nota..."
            /> */}
        </div>
    );
}

export default Day;
