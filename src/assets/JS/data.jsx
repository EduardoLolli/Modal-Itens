import React, { useState } from 'react';
import listaDeItens from './lista';
import Card from './card';
import Modal from './modal';


const ItemList = () => {


  const [itemClicado, setItemClicado] = useState(null);
  const ativaModal = (object) => {
    setItemClicado(object);
  }
  const fechaModal = () => {
    setItemClicado(false)
  }

  const [mostraModal, setMostraModal] = useState(false);

  const showModal = () => {
    setMostraModal(true)
  }
  const closeModal = () => {
    setMostraModal(false)
  }

  const criaTexto = () => {
    return (

      <Modal
        close={closeModal}
        name={itemClicado.name}
        image={itemClicado.image}
        custo={itemClicado.custo}
        status={itemClicado.status}
        description={itemClicado.description} />
    )
  }


  return (
    <body>
      <div className='cabecalho'><h1>Lista de Itens</h1></div>


      <div className='container cards-container'>
        {listaDeItens.map((obj, i) => {

          return (

            <div >
              <Card
                id={i}
                click={() => { ativaModal(obj); showModal() }} />
            </div>)

        })}

        {mostraModal == true ? criaTexto() : <div></div>}

      </div>

    </body >
  );

};


export default ItemList;