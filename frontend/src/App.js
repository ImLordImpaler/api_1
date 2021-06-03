import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import List from './List'
import Detail from './Detail'
import Navbar from './Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  
  
  render() {
    return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route path="/" exact component={List}/>
          <Route path='/detail' component={Detail} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;