import React, { Component } from 'react';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateAuth.css';

class templateAuth extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="containerForm">
        <p>Necesitamos tus datos</p>
        
        <ComponentVisualInput message="Nombre y apellido"></ComponentVisualInput>
        <ComponentVisualInput message="Empresa a la que representas"></ComponentVisualInput>
        <ComponentVisualInput message="Rut de la empresa"></ComponentVisualInput>
        <ComponentVisualInput message="Correo electrónico"></ComponentVisualInput>
        <ComponentVisualInput message="Teléfono de contacto"></ComponentVisualInput>
        <ComponentVisualInput message="Contraseña"></ComponentVisualInput>
        <ComponentVisualInput message="Confirmar contraseña"></ComponentVisualInput>
     
         <ComponentVisualButton
                type="submit"
                name="Crea tu cuenta"
                className="login-btn"
                buttonOnClick={(evt) => {
                  this.sendToDataBase(evt);
                }}
                />
                
                </section>
         
      </React.Fragment>
    );
  }
}

export default templateAuth;

