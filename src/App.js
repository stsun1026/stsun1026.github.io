import React from 'react';
import './App.css';
import pic from './assets/steven-n-the-bees-cropped.jpg';
import FormattedImage from './components/FormattedImage';
import SamplePage from './pages/samplePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <div>
              <Link to="/">Home</Link>
              <Link to="/l1">Link2</Link>
              <Link to="/l2">Link3</Link>
        </div>
        <FormattedImage image = {pic} sizeRatio = "0.98"/>  
        <p>
          Hello, welcome to my website.
        </p>
        <a
          className="App-link"
          href="https://media.giphy.com/media/fsQQb3KSaBxnuFaXOk/giphy.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is an external link.
        </a>
        <Switch>
          <Route path="/l1">
            <SamplePage content={"This is the content of link 1"}/>
          </Route>
          <Route path="/l2">
            <SamplePage content={"This is the content of link 2"}/>
          </Route>
          
          <Route path = "/">
            <SamplePage content="This is the content of the home page."/>
          </Route>

        </Switch>
      </div>
    </Router>
      </header>

    </div>

  );
}
//this is a git demo
export default App;