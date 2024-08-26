// Dashboard.js
import React from 'react';

function Dashboard() {
    return (
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard. This is a separate page.</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
};

export default Dashboard;
