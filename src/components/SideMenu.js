import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, List as ListIcon, CardTravel as CardTravelIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, TableChart as TableChartIcon, People as PeopleIcon } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: '#fff',
        boxShadow: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/todos">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="To Dos" />
        </ListItem>
        <ListItem button component={Link} to="/cards">
          <ListItemIcon>
            <CardTravelIcon />
          </ListItemIcon>
          <ListItemText primary="Cards" />
        </ListItem>
        <ListItem button component={Link} to="/charts">
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="Charts" />
        </ListItem>
        <ListItem button component={Link} to="/graphs">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Graphs" />
        </ListItem>
        <ListItem button component={Link} to="/tables">
          <ListItemIcon>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default Sidebar;
