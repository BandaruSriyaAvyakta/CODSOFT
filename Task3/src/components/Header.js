import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled } from '@mui/material/styles';
import CalculateIcon from '@mui/icons-material/Calculate';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  right: theme.spacing(2), // Adjusted position to the right
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
  '&:hover': {
    backgroundColor: theme.palette.grey[400],
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '&.MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 12),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElSettings, setAnchorElSettings] = React.useState(null);
  const [calculation, setCalculation] = useState('');

  const handleOpenSettingsMenu = (event) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElSettings(null);
  };

  const handleOperation = (operation) => {
    // Append the operation to the current calculation
    setCalculation(calculation + operation);
  };

  const handleEquals = () => {
    // Replace 'x' with '*' for multiplication
    const expression = calculation.replace(/x/g, '*');
    // Evaluate the expression and update the calculation state with the result
    try {
      setCalculation(eval(expression));
    } catch (error) {
      // Handle error
      console.error('Invalid expression:', error);
      setCalculation('Error');
    }
  };
  

  return (
    <AppBar position="static" sx={{ backgroundColor: '#C499F3' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="settings"
              aria-controls="settings-menu"
              aria-haspopup="true"
              onClick={handleOpenSettingsMenu}
              color="inherit"
              sx={{ mr: 1 }}
            >
              <SettingsIcon />
            </IconButton>
            <CalculateIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Poetsen One',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CALCULATOR
            </Typography>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Menu
            id="settings-menu"
            anchorEl={anchorElSettings}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElSettings)}
            onClose={handleCloseSettingsMenu}
          >
            <MenuItem onClick={handleCloseSettingsMenu}>Angle Unit</MenuItem>
            <MenuItem onClick={handleCloseSettingsMenu}>Font Size</MenuItem>
            <MenuItem onClick={handleCloseSettingsMenu}>Rounding</MenuItem>
            <MenuItem onClick={handleCloseSettingsMenu}>Language</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
