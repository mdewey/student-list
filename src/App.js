import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import PageShell from './components/PageShell'

import Home from './pages/Home'
import StudentList from './pages/StudentList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={PageShell(Home)}></Route>
        <Route path="/students" exact component={PageShell(StudentList)}></Route>
      </div>
    );
  }
}
export default App;