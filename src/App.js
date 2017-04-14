import React, { Component } from 'react';
import Login from './components/Login.js'

class App extends Component {
  
  constructor(){
    super();
    this.state={
      login:false,
      menu:false,
      page:'home'
    }
  }
  
  activeLogin(){
    if (this.state.login==true) return <Login />
  }
  
  componentWillMount(){
    let valueLogin=(this.props.login=='true');
    if (this.state.login!==valueLogin) this.setState({login:valueLogin},function(){})
  }
  
  render() {
    return (
      <div>
        {this.activeLogin()}
      </div>
    )
  }
}

export default App;
