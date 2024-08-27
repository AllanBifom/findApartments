// Dashboard.js
import React from 'react';
import CustomCard from './CustomCard';
import Grid from '@mui/material/Grid';
import DashboardNavbar from './DashboardNavbar';

function Dashboard() {
    // Example data to populate the cards
    const cardData = [
        {
            title: 'Card 1',
            description: 'This is the description for card 1.',
            imageUrl: 'https://via.placeholder.com/300',
        },
        {
            title: 'Card 2',
            description: 'This is the description for card 2.',
            imageUrl: 'https://via.placeholder.com/300',
        },
        {
            title: 'Card 3',
            description: 'This is the description for card 3.',
            imageUrl: 'https://via.placeholder.com/300',
        },
        {
            title: 'Card 4',
            description: 'This is the description for card 4.',
            imageUrl: 'https://via.placeholder.com/300',
        },
    ];

    return (
        <div>
            <DashboardNavbar />
            <div style={styles.container}>
                <h1>HomeFinder Dashboard</h1>
                <p>Welcome to the HomeFinder dashboard. Here are some items:</p>
                <Grid container spacing={3}>
                    {cardData.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <CustomCard
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
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
