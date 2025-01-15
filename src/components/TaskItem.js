import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTask, setTaskPriority } from '../redux/actions/taskActions';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

const Text = styled.span`
  flex-grow: 1;
`;

const PrioritySelect = styled.select`
  margin-right: 1rem;
`;

const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
  }
`;

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handlePriorityChange = (e) => {
    dispatch(setTaskPriority(task.id, e.target.value));
  };

  return (
    <Item>
      <Text>{task.text}</Text>
      <PrioritySelect value={task.priority} onChange={handlePriorityChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </PrioritySelect>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Item>
  );
}

export default TaskItem;

