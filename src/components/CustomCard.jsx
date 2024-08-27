// CustomCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CustomCard({ title, description, imageUrl }) {
    return (
        <Card style={styles.card}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={imageUrl}
                style={styles.media}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

const styles = {
    card: {
        width: '300px',
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        objectFit: 'cover',
    },
};

export default CustomCard;
