import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Login">
        <h1 className="Logo">Project D20</h1>
      
        <form id="FormLogin" action="#">
            <label htmlFor="email">
                <input type="email" name="email" id="LoginEmail" placeholder="Email" />
                <span id="LoginEmailError" className="_MsgError"></span>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" id="LoginPassword" placeholder="Contraseña" />
                <span id="LoginPasswordError" className="_MsgError"></span>
            </label>
            <button type="submit">Entrar / Nuevo</button>
        </form>
      </div>
    );
  }
}

export default App;
