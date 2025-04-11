import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Paper, Link } from '@mui/material';
import './../../src/styles/Login.css'; // CSS import

import logo from '../assets/frilo-logo.svg'; // Ya process.env.PUBLIC_URL + '/frilo-logo.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', { username, password });
        alert('Login successful! (Dummy)');
    };

    return (
        <Container className="login-page">
            <img src={logo} alt="FRILO Logo" className="logo-image" />
            <Paper className="login-card" elevation={3}>
                <Typography variant="h5" gutterBottom>
                    Welcome Back!
                </Typography>
                <TextField
                    label="Nickname"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Secret Code"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    className="login-button"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                    New here? <Link href="/signup">Sign Up</Link>
                </Typography>
            </Paper>
            <Typography className="tagline">
                Dost Se Udhar, Hass Ke Adaa!
            </Typography>
        </Container>
    );
}

export default Login;