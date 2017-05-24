import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import User from './classes/User.js';

var user=new User(createUser);

function createUser(){
    this.events.add('onNewUser',activeLogin.bind(this));
    this.events.add('onLoadUser',activeUser);
    this.events.isLogin();
}

function activeLogin(){
    let token=(this.token==false);
    ReactDOM.render(<App login={token} />,document.getElementById('login'));
}

function activeUser(){
    ReactDOM.render(<App login="false" />,document.getElementById('login'));
}
