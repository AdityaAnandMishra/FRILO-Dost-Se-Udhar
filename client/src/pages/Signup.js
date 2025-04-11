import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Paper, Link } from '@mui/material';
import './../../src/styles/Signup.css'; // CSS import

import logo from '../assets/frilo-logo.svg'; // Ya process.env.PUBLIC_URL + '/frilo-logo.png'

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters!');
            return;
        }
        setError('');
        console.log('Signing up with:', { username, password });
        alert('Signup successful! (Dummy)');
    };

    return (
        <Container className="signup-page">
            <img src={logo} alt="FRILO Logo" className="logo-image" />
            <Paper className="signup-card" elevation={3}>
                <Typography variant="h5" gutterBottom>
                    Create Your Account!
                </Typography>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    label="Nickname"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    className="signup-button"
                    onClick={handleSignup}
                >
                    Sign Up
                </Button>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Already have an account? <Link href="/">Login</Link>
                </Typography>
            </Paper>
            <Typography className="tagline">
                Dost Se Udhar, Hass Ke Adaa!
            </Typography>
        </Container>
    );
}

export default Signup;