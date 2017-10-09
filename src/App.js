import {Route} from 'react-router-dom';
import React, {Component} from 'react';

import PageShell from './components/PageShell'

import Home from './pages/Home'
import StudentList from './pages/StudentList'
import StudentDetail from './pages/StudentList'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Route path="/" exact component={PageShell(Home)}></Route>
          <Route path="/students" exact component={PageShell(StudentList)}></Route>
          <Route path="/students/:name" exact component={PageShell(StudentDetail)}></Route>
        </div>
      </div>
    );
  }
}
export default App;