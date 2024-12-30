import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({ link }) => {
const handleClick = () => {
window.location.href = link; // For external links
};

return (
<Button onClick={handleClick} variant="contained"
style={{
backgroundColor: '#B2AC88', // Sage green color
color: '#fff', // White text color
fontFamily: 'Courier New, monospace',
fontSize: '20px',
fontWeight: 'bold',
padding: '15px 30px',
borderRadius: '10px',
textTransform: 'none', // Prevents uppercase transformation
position: 'relative', // Set position to relative
top: '-100px', // Move 100px up
left: '-265px', // Move 100px to the left
}}>
Purchase Paperback Doodle Planner Here!
</Button>
);
};

export default ButtonComponent;
