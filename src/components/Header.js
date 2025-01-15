import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../redux/actions/authActions';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Button = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #d32f2f;
  }
`;

function Header() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <Title>Advanced Todo App</Title>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </HeaderContainer>
  );
}

export default Header;

