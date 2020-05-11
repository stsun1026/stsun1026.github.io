import React from 'react';
import './App.css';
import SamplePage from './pages/samplePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ClearTheTreePage from './pages/ClearTheTreePage/ClearTheTreePage';
function App() {
  const sp = SamplePage({content: "hello"});
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Switch>
            <Route path="/clear-the-tree">
              <ClearTheTreePage/>
            </Route>
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