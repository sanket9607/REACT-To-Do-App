import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import { GlobalStyles } from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

