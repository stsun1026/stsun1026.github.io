import React from 'react';
import './App.css';
import SamplePage from './pages/samplePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ClearTheTreePage from './pages/ClearTheTreePage/ClearTheTreePage';
function App() {
  const Button = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/l2') }}
    >
      Click Me!
    </button>
  ));
  const sp = SamplePage({content: "hello"});
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Switch>
            <Route path="/clear-the-tree">
              <ClearTheTreePage/>
            </Route>
            <Route path="/l1">
              <SamplePage content={"This is some text and here is some more text"}/>
            </Route>
            <Route path="/l2" component={() => sp}/>
              {/* <SamplePage content={"This is the content of link 2"}/> */}
            <Route path = "/">
              <HomePage/>
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}
export default App;