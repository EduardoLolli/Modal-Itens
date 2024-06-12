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
/*
            <div className="modal-background">
                <div className='modal'>
                    <div className="modal-header">
                        <button onClick={closeModal}>x</button>
                    </div>
                    <h1>{itemClicado.name}</h1>
                    <div className="modal-content">
                        <div><img src={itemClicado.image} alt="" /></div>
                        <div className="modal-content-info">
                            <li>{itemClicado.custo}</li>
                            <li>{itemClicado.status}</li>
                            <li>{itemClicado.description}</li>
                        </div>
                    </div>
                </div>
            </div>*/)
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