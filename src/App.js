import React, { Component } from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu.js';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      login:false,
      menu:false
    }
  }
  
  activeLogin(){
    if (this.state.login) return <Login />
  }
  
  displayMenu(){
    return <Menu display={this.state.menu} />
  }
  
  componentWillMount(){
    let valueLogin=(this.props.login===true);
    let valueMenu=(this.props.menu===true);
    
    if (this.state.login!==valueLogin) this.setState({login:valueLogin},function(){})
    if (this.state.menu!==valueMenu) this.setState({menu:valueMenu},function(){});
  }
  
  render() {
    return (
      <div>
        {this.activeLogin()}
        {this.displayMenu()}
      </div>
    )
  }
}

export default App;
