import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// A partir de ahora los datos fluyen desde este componente // Solo cuando utilizas context api

// Crear el context
export const CategoriasContext = createContext();

// Creando el provider / Es de donde van a salir los datos, las funciones y state
const CategoriasProvider = (props) => {
  
  // Crear el state del context 
  const [ categorias, guardarCategorias ] = useState([]);

  // Ejecutar el llamado a la API
  useEffect(() => {
      const obtenerCategorias = async () => { 
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

        const categorias = await axios.get(url);

        guardarCategorias (categorias.data.drinks);
        
      }
      obtenerCategorias( )

  }, [ ]);


  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasProvider;

