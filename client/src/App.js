import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch ko Routes se replace
import { CssBaseline } from '@mui/material'; // MUI ka default styling
import Login from './pages/Login';

function App() {
    return (
        <Router>
            <CssBaseline /> {/* MUI ka default reset CSS */}
            <Routes>
                <Route path="/" element={<Login />} /> {/* path aur component ko element ke saath */}
            </Routes>
        </Router>
    );
}

export default App;