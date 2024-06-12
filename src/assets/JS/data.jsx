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
            <div className='modal-container' >
                <div className='modal'>

                    <p className='closeButton' onClick={closeModal} >Fechar</p>
                    <h2>{itemClicado.name}</h2>
                    <img src={itemClicado.image} />
                    <p>{itemClicado.description}</p>


                </div>
            </div>)
    }


    return (
        <body>
            <div className='cabecalho'><h1>Lista de Itens</h1></div>


            <div className='container'>
                {listaDeItens.map((obj, i) => {

                    return (

                        <div>
                            <Card
                                id={i}
                                click={() => { ativaModal(obj); showModal() }} />
                        </div>)

                })}


                {console.log(itemClicado)}
                {mostraModal == true ? criaTexto() : <div></div>}

            </div>

        </body >
    );

};


export default ItemList;