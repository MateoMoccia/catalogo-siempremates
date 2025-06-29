import React, { useContext } from 'react';
import ProductosLista from '../components/ProductosRndLista/ProductosLista';
import '../Styles/Mates.css';

const Mates = () => {

  return (
    <div>
      <h2>Mates </h2>
      <div className='container-grabado-mates'>
        <p className='GrabadoDeMates'>Presentamos nuestra opcion de grabado de mates totalmente personalizado.
          <br />
          Que esperas para contactarnos y obtener el tuyo!!
        </p>
                  <img className='ImagenGrabados' src="/img/Grabado-de-mates.png" alt="ImagenGrabados" />
      </div>
      <ProductosLista categoria="Mates"/>
    </div>
  );
};

export default Mates;
