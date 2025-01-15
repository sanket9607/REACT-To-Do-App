import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../redux/actions/taskActions';

const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0 4px 4px 0;

  &:hover {
    background-color: #45a049;
  }
`;

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, priority: 'medium' }));
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
}

export default TaskInput;

