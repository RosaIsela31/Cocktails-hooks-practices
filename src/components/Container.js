import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import CategoriasProvider from '../context/CategoriasContext';
import ListaRecetas from './ListaRecetas';

import RecetasProvider from '../context/RecetasContext';

const Container = () => {
  return ( 
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Formulario />
          </div>
          <ListaRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
   );
}
 
export default Container;