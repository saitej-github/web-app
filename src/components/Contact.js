import React from 'react';
import { Box, Typography, Container, Grid, Link, Divider, TextField, Button } from '@mui/material';
import { Phone as PhoneIcon, Email as EmailIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <PhoneIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="p">
                  <strong>Phone:</strong> +1 (123) 456-7890
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <EmailIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" component="p">
                  <strong>Email:</strong> contact@reactproject.com
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  <strong>Follow Us:</strong>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Link href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
                    <FacebookIcon />
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
                    <TwitterIcon />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
                    <InstagramIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* User Message Form */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Send Us a Message
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box component="form" noValidate autoComplete="off">
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;


