import React, { Component } from 'react';

/*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });*/

class templateAuth extends Component {
  render() {
    return (
      <React.Fragment>
          <input id='email-user' class='email' type='email' placeholder='Ingrese su correo'></input>
          <input id='password-user' class='password' type='password' placeholder='Ingrese su contraseña'></input>
          <button id='signInBtn' class='login-btn'>INICIAR SESIÓN</button>
         
      </React.Fragment>
    );
  }
}

export default templateAuth;