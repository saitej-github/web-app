import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemSecondaryAction,
  Paper,
  Grid,
  Container
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ToDos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const handleUpdateTodo = () => {
    if (editText.trim()) {
      setTodos(todos.map((todo, i) => (i === editIndex ? { ...todo, text: editText } : todo)));
      setEditIndex(null);
      setEditText('');
    }
  };

  const handleToggleComplete = (index) => {
    setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo)));
  };

  const handleDeleteSelected = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Add new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAddTodo}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <Paper elevation={3} sx={{ marginTop: 4, padding: 2 }}>
          <List>
            {todos.map((todo, index) => (
              <ListItem key={index} dense button>
                <Checkbox
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => handleToggleComplete(index)}
                />
                {editIndex === index ? (
                  <TextField
                    fullWidth
                    variant="outlined"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleUpdateTodo}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleUpdateTodo();
                      }
                    }}
                  />
                ) : (
                  <ListItemText
                    primary={todo.text}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  />
                )}
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit" onClick={() => handleEditTodo(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Box mt={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteSelected}
              disabled={!todos.some((todo) => todo.completed)}
            >
              Delete Selected
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ToDos;
