// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#81c784', // Light green
        },
        secondary: {
            main: '#aed581', // Another shade of green
        },
        background: {
            default: '#e8f5e9', // Light green background for the app
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export default theme;
