import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../redux/actions/authActions';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    history.push('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <Button type="submit">Login</Button>
    </Form>
  );
}

export default Login;

