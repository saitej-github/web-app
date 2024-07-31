import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { List as ListIcon, CardTravel as CardTravelIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, TableChart as TableChartIcon, People as PeopleIcon } from '@mui/icons-material';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
      {/* Hero Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="h6" component="p" sx={{ color: '#555' }}>
          Explore various features and sections of the application.
        </Typography>
      </Box>

      {/* Card Grid */}
      <Container>
        <Grid container spacing={3}>
          {/* To Dos Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <ListIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  To Dos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your tasks efficiently and stay organized.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/todos" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Cards Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <CardTravelIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  Cards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View various cards with dynamic content.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/cards" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Charts Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <PieChartIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  Charts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Visualize data with various chart types.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/charts" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Graphs Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <BarChartIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  Graphs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore different types of graphs for your data.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/graphs" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Tables Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <TableChartIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  Tables
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage tabular data effectively.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/tables" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Users Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                transition: '0.3s',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.03)',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <PeopleIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" component="div" gutterBottom>
                  Users
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage user accounts and details.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/users" variant="contained" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

