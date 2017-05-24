import React, { Component } from 'react';
import Login from './components/login/Login';
import Menu from './components/mainMenu/Menu';

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
