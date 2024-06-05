import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar>
          <Button 
            color="inherit" 
            sx={{ 
              mr: 'auto', 
              color: 'blue', 
              borderColor: 'blue', 
              border: 1,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 255, 0.1)',
              }
            }}
          >
            Subscribe
          </Button>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              textAlign: 'center',
              color: 'black'
            }}
          >
            Landing Page
          </Typography>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
            <Button 
              color="inherit" 
              sx={{ 
                color: 'blue', 
                borderColor: 'blue', 
                border: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 255, 0.1)',
                }
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
