import React, { Fragment } from 'react';
import Header from './Header';
import Formulario from './Formulario';

const Container = () => {
  return ( 
    <Fragment>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Formulario />
        </div>
      </div>
    </Fragment>
   );
}
 
export default Container;