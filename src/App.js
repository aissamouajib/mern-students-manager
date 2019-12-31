import React, { Component } from 'react'
import './App.css';

import Login from './components/login.component'
import Home from './components/home.component'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false
    }
  }
  
  render() {
    // const app = this.state.loggedIn ? 
    //   <Home signOut={() => this.setState({loggedIn: false,})}/> : 
    //   <Login signIn={() => this.setState({loggedIn: true,})}/>;

    const app = <Home/>
    return (
        <div className="App">
          {app}
        </div>
    );
  }
}

export default App