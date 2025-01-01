import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';
import GetStartedContainer from './containers/GetStartedContainer';
import CalendarContainer from './containers/CalendarContainer';
import CalendarContainer2 from './containers/CalendarContainer2';
import CalendarContainer3 from './containers/CalendarContainer3';
import CalendarContainer4 from './containers/CalendarContainer4';
import Error from './views/Error';
import Button from '@mui/material/Button';
import ButtonComponent from './ButtonComponent.jsx'


import './App.css';

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomeContainer />} />
                <Route path="/getstarted" element={<GetStartedContainer />} />
                <Route path="/calendar" element={<CalendarContainer />} />
                <Route path="/calendar2" element={<CalendarContainer2 />} />
                <Route path="/calendar3" element={<CalendarContainer3 />} />
{/*                 <Route path="/calendar4" element={<CalendarContainer4 />} /> */}
                <Route path="*" element={<Error />} />
            </Routes>
             <ButtonComponent link='https://www.amazon.com/dp/B0DRXTFK9Z'>

               </ButtonComponent>
        </div>
    );
}

export default App;

