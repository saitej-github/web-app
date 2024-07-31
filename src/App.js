import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, CssBaseline, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from './components/SideMenu';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ToDos from './components/ToDos';
import Cards from './components/Cards';
import Charts from './components/Charts';
import Graphs from './components/Graphs';
import Tables from './components/Tables';
import Users from './components/Users';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        <AppBar position="fixed">
          <Toolbar>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant="h6" component={Link} to="/about" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>
              About Us
            </Typography>
            <Typography variant="h6" component={Link} to="/contact" style={{ marginLeft: 20, textDecoration: 'none', color: 'inherit' }}>
              Contact Us
            </Typography>
          </Toolbar>
        </AppBar>
        <SideMenu open={mobileOpen} onClose={handleDrawerToggle} />
        <div style={{ flexGrow: 1, paddingTop: 64, paddingLeft: isMobile ? 0 : 250 }}>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/todos" element={<ToDos />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/graphs" element={<Graphs />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;

