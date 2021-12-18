import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'

function Componente({ titulo, children }) {
  // const titulo = props.titulo;
  // const contenido = props.contenido;

  return (
    <div className='contenerdor'>
      <h1>{titulo}</h1>
      <h1>{children}</h1>
      <section>
        <p>
          Parrafo
        </p>
      </section>
    </div>);
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)