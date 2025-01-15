import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Login from './components/Login';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? (
            <>
              <TaskInput />
              <TaskList />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login" component={Login} />
      </Switch>
    </AppContainer>
  );
}

export default App;

