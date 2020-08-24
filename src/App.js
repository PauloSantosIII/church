import React from 'react'
import Home from './pages/home'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default App;
