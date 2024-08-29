// SearchFilter.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';

function SearchFilter({ onSearch }) {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleSearch = () => {
    onSearch({ location, priceRange, bedrooms });
  };

  return (
    <Grid container spacing={3} style={styles.container}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Price Range"
          variant="outlined"
          fullWidth
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Bedrooms"
          variant="outlined"
          fullWidth
          select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="1">1 Bedroom</MenuItem>
          <MenuItem value="2">2 Bedrooms</MenuItem>
          <MenuItem value="3">3 Bedrooms</MenuItem>
          <MenuItem value="4">4+ Bedrooms</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
};

export default SearchFilter;
