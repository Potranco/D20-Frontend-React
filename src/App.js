import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="Login">
        <h1 class="Logo">Project D20</h1>
      
        <form id="FormLogin" action="#">
            <label for="email">
                <input type="email" name="email" id="LoginEmail" placeholder="Email" />
                <span id="LoginEmailError" class="_MsgError"></span>
            </label>
            <label for="password">
                <input type="password" name="password" id="LoginPassword" placeholder="Contraseña" />
                <span id="LoginPasswordError" class="_MsgError"></span>
            </label>
            <button type="submit">Entrar / Nuevo</button>
        </form>
      </div>
    );
  }
}

export default App;
