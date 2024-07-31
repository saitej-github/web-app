import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Container,
  Paper,
  Chip,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const initialUsers = [
  { id: 1, name: 'Ryan Renolds', email: 'deadpool@example.com', phone: '123-456-7890', age: 30, occupation: 'Engineer', skills: ['JavaScript', 'React'] },
  { id: 2, name: 'Hugh Jackman', email: 'Wolverine@example.com', phone: '987-654-3210', age: 28, occupation: 'Designer', skills: ['Photoshop', 'Illustrator'] },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', age: '', occupation: '', skills: '' });

  const handleDialogOpen = (user = null) => {
    if (user) {
      setEditMode(true);
      setCurrentUser(user);
      setNewUser({
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age,
        occupation: user.occupation,
        skills: user.skills.join(', '),
      });
    } else {
      setEditMode(false);
      setNewUser({ name: '', email: '', phone: '', age: '', occupation: '', skills: '' });
    }
    setOpenDialog(true);
  };

  const handleDialogClose = () => setOpenDialog(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddOrUpdateUser = () => {
    const userData = {
      ...newUser,
      skills: newUser.skills.split(',').map(skill => skill.trim()), // Convert skills to array
      age: parseInt(newUser.age, 10), // Convert age to number
    };

    if (editMode) {
      setUsers(users.map(user => 
        user.id === currentUser.id ? { ...user, ...userData } : user
      ));
    } else {
      setUsers([...users, { id: Date.now(), ...userData }]);
    }
    handleDialogClose();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleDialogOpen()}>
        Add User
      </Button>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SNo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Occupation</TableCell>
              <TableCell>Skills</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{index + 1}</TableCell> {/* Serial number */}
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.occupation}</TableCell>
                <TableCell>
                  {user.skills.map((skill, i) => (
                    <Chip key={i} label={skill} style={{ marginRight: 4 }} />
                  ))}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDialogOpen(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit User Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{editMode ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            value={newUser.age}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="occupation"
            label="Occupation"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.occupation}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="skills"
            label="Skills (comma-separated)"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.skills}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleAddOrUpdateUser}>{editMode ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Users;

