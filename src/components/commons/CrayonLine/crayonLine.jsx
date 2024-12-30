import React, { useState } from "react";
import './crayonLine.scss';

const CrayonLines = ({ lineCount }) => {
    const [lines, setLines] = useState(new Array(lineCount).fill(""));

    const handleInputChange = (index, event) => {
        const newLines = [...lines];
        newLines[index] = event.target.value;
        setLines(newLines);
    };

    const handleSave = () => {
        console.log(lines); // Aquí puedes enviar las líneas al servidor o almacenarlas localmente
    };
    

    return (
        <div className="crayon-lines">
            {lines.map((line, index) => (
                <div key={index} className="crayon-line">
                    <input 
                        type="text"
                        value={line}
                        onChange={(e) => handleInputChange(index, e)}
                        className="crayon-line-input"
                        placeholder={`Line ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default CrayonLines;
