import React, { useState } from 'react';
import listaDeItens from '../components/ArrayLista/lista';
import Card from '../components/Card/card';


const ItemList = () => {
  return (
    <body>
      <div className='cabecalho'><h1>Lista de Itens</h1></div>
      <div className='container cards-container'>
        {listaDeItens.map((obj, i) => {
          return (
            <div >
              <Card
                objItens={obj} />
            </div>)
        })}
      </div>
    </body >
  );

};


export default ItemList;