import React from "react";
import listaDeItens from "./lista";
import ItemList from "./data";

function Modal(props) {

    let indice = 0;

    return (



        <div className='modal'>
            <div>
                <strong>x</strong>
            </div>
            <div>
                <h1>{listaDeItens[indice].name}</h1>
                <div><img src={listaDeItens[indice].image} alt="" /></div>
                <div>
                    <li>{listaDeItens[indice].custo}</li>
                    <li>{listaDeItens[indice].status}</li>
                    <li>{listaDeItens[indice].description}</li>
                </div>
            </div>



        </div>

    )


}

export default Modal;