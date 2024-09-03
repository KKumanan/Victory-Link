import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Authentication</h1>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
