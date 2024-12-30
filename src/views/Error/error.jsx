import React from 'react';

import Button from '../../components/commons/Button';
import './error.scss';

const Error = () => (
  <div className="container" data-testid="error-page">
    <div className="row error">
      <h1>Ups!</h1>
      <h1>Algo sali&oacute; mal</h1>
      <h3>No pudimos encontrar la p&aacute;gina que estabas buscando.</h3>
      <Button text="Volver al inicio" href="/home" />
    </div>
  </div>
);

export default Error;