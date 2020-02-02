import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

  const [ recetas, guadarRecetas ] = useState([]);

  const [ busqueda, buscarRecetas ] = useState({
      nombre: '',
      categoria: ''

  });

  return ( 
      <RecetasContext.Provider
          value={{
            buscarRecetas
          }}
      >
          {props.children}
      </RecetasContext.Provider>
   );
}
 
export default RecetasProvider;