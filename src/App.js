import React from 'react';
import './App.css';

import SamplePage from './pages/samplePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'


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
        <div>
              <Link to="/">Home</Link>
              <Link to="/l1">Link2</Link>
              <Button/>
        </div>
        <Switch>
          <Route path="/l1">
            <SamplePage content={"This is some text and here is some more text"}/>
          </Route>
          <Route path="/l2" component={() => sp}/>
            {/* <SamplePage content={"This is the content of link 2"}/> */}

          <Route path = "/">
            <SamplePage/>
          </Route>
        </Switch>
    </header>
    </Router>
    
    </div>
  );
}
export default App;