// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static" style={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Button color="inherit" component={Link} to="#home">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="#about">
                    About
                </Button>
                <Button color="inherit" component={Link} to="#contact">
                    Contact
                </Button>
                <Button color="inherit" component={Link} to="/dashboard">
                    Homefinder
                </Button>
            </Toolbar>
        </AppBar>
    );
}
const styles = {
    appBar: {
        backgroundColor: '#555',
    },
    backButton: {
        marginLeft: 'auto', // Pushes the button to the right side
    },
};

export default Navbar;
