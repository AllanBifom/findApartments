// DashboardNavbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function DashboardNavbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" style={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <Button color="inherit" component={Link} to="/dashboard/settings">
                    Settings
                </Button>
                <Button color="inherit" component={Link} to="/dashboard/profile">
                    Profile
                </Button>
                <Button
                    color="inherit"
                    onClick={() => navigate('/')}
                    style={styles.backButton}
                >
                    Back to Main Page
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

export default DashboardNavbar;
