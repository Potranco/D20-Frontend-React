import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import User from './classes/User.js';

var user=new User();
user.events.add('onNewUser',ReactDOM.render(<App />,document.getElementById('login')));



