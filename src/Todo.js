import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import {db} from './Firebase';

function Todo(props) {
  return (
      <ListItem>
        <ListItemText secondary="Todo" primary={props.task.todo} />
        <Button variant="outlined" color="secondary" onClick={(event) => db.collection('todos').doc(props.task.id).delete()}>Delete</Button>
      </ListItem>
  )
}
export default Todo;