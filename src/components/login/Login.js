import React, { Component } from 'react';
import ValidateForm from '../../classes/libs/validateFormHTML5';
import css from './login.css'

class Login extends Component {

  componentDidMount(){
    var validateForm = new ValidateForm('FormLogin',{
            formValidate:'true',
            rules: {
                        LoginEmail: {
                           required:true,
                           max_length:'200',
                           min_length:'3',
                           email:true
                        },
                        LoginPassword: {
                            required:true,
                            max_length:'12',
                            min_length:'5'
                        }
            },
            messages: {
                       LoginEmail: {
                           required:'Campo incorecto',
                           max_length:'Maximo de 200 caracteres',
                           min_length:'Minimo de 3 caracteres',
                           custom:'Email no valido'
                       },
                       LoginPassword:{
                            required:'Campo incorrecto',
                            max_length:'Maximo de 12 caracteres',
                            min_length:'Minimo de 5 caracteres'
                       }
            },
            custom: {
                      LoginEmail: {
                          inputCSS:'',
                          labelCSS:'_InputError',
                          idError:'LoginEmailError'
                      },
                       LoginPassword: {
                          inputCSS:'',
                          labelCSS:'_InputError',
                          idError:'LoginPasswordError'
                      }
            }
    },this.newUser);
  }

  newUser(){
    console.log('Create new user');
  }

  render() {
    return (
      <div className="Login">
        <h1 className="Logo">Project D20</h1>
        <form id="FormLogin" action="#">
            <label htmlFor="email">
                <input type="text" name="email" id="LoginEmail" placeholder="Email" />
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

export default Login;
