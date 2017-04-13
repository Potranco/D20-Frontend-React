import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import User from './classes/User.js';

var user=createUser();

if (user.events.isLogin()) {
    console.log(true);
}
else {
    console.log(false);
}


function createUser(){
    let user=new User();
    if (user.events.onLoad()) {
        user.events.add('onNewUser',activeLogin);
        user.events.add('onLoadUser',activeUser);
        user.events.isLogin();
        return user;
    }
    else {
        console.log('No se pudieron cargar los datos' );
    }
    
}

function activeLogin(){
    console.log('No login 1');
    ReactDOM.render(<App login="true" />,document.getElementById('login'));
}

function activeUser(){
    ReactDOM.render(<App login="false" />,document.getElementById('login'));
}






