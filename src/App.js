import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import ClearTheTreePage from './pages/ClearTheTreePage/ClearTheTreePage';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Switch>
            <Route path="/clear-the-tree"><ClearTheTreePage/></Route>
            <Route path="/experience"><ExperiencePage/></Route>
            <Route path="/projects"><UnderConstructionPage/></Route>
            <Route path="/photos"><UnderConstructionPage/></Route>
            <Route path="/"><HomePage/></Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}
export default App;