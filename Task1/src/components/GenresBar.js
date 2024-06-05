import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const genres = ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Fantasy', 'Biography', 'Self-Help', 'Children', 'History'];

export default function GenresBar() {
  return (
    <Box sx={{ flexGrow: 1, mt: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          {genres.map((genre) => (
            <Typography key={genre} variant="body1" component="div" sx={{ textDecoration: 'underline' }}>
              {genre}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
