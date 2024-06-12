import React, { useState } from 'react';
import listaDeItens from './lista';
import Card from './card';


const ItemList = () => {


/*
    return (
        <div>
            <Card />
        </div>
    )
*/




    
        const [itemClicado, setItemClicado] = useState(null);
    
        const ativaModal = (object) => {
            setItemClicado(object);
        }
    
        const fechaModal = () => {
            setItemClicado(false)
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
    
    
        const [mostraModal, setMostraModal] = useState(false);
    
        const showModal = () => {
            setMostraModal(true)
        }
    
        const closeModal = () => {
            setMostraModal(false)
        }
    
        return (
            <body>
                <div className='cabecalho'><h1>Lista de Itens</h1></div>
    
    
                <div className='container'>
                    {listaDeItens.map((object) => {
    
                        return (
    
                            <div id={object.id} className='itens-lista' onClick={() => { ativaModal(object); showModal() }} >
    
                                <div>
                                    <h3>{object.name}</h3>
                                    <img src={object.image} className='imagem-modal' />
                                    <p>{object.name}</p>
                                </div>
                            </div>)
    
                    })}
    
    
    
                    {console.log(itemClicado)}
                    {mostraModal == true ? criaTexto() : <div></div>}
    
    
    
    
                </div>
    
    
    
    
    
    
            </body >
        );
        
};


export default ItemList;