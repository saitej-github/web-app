import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Divider, Button } from '@mui/material';
import { Info as InfoIcon, Business as BusinessIcon, Person as PersonIcon } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
          About Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Company Overview */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" component="p">
                We are committed to providing the best services to our clients. Our team of dedicated professionals
                work tirelessly to ensure customer satisfaction and deliver outstanding results.
              </Typography>
            </Box>
          </Grid>

          {/* Team Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Meet Our Team
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar alt="John Doe" src="/path-to-image/john-doe.jpg" sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" component="h3">
                        John Doe
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        CEO & Founder
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar alt="Jane Smith" src="/path-to-image/jane-smith.jpg" sx={{ width: 56, height: 56, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" component="h3">
                        Jane Smith
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        CTO & Co-Founder
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {/* Add more team members as needed */}
              </Grid>
            </Box>
          </Grid>

          {/* Our Values */}
          <Grid item xs={12}>
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Core Values
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <InfoIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1" component="p">
                    Integrity: We operate with honesty and transparency in all our dealings.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BusinessIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1" component="p">
                    Excellence: We strive for excellence and aim to exceed expectations.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1" component="p">
                    Respect: We treat everyone with respect and value diverse perspectives.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
