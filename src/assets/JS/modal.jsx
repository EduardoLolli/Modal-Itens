import React from "react";
import listaDeItens from "./lista";
import ItemList from "./data";

function Modal(props, isOpen) {

    let indice = 1;

    return (

        <div className="modal-background">
            <div className='modal'>

                <div className="modal-header">
                    <button onClick={props.close}>x</button>
                </div>

                <h1>{listaDeItens[props.name].name}</h1>

                <div className="modal-content">
                    
                    <div><img src={listaDeItens[props.image].image} alt="" /></div>

                    <div className="modal-content-info">
                        <li>{listaDeItens[props.custo].custo}</li>
                        <li>{listaDeItens[props.status].status}</li>
                        <li>{listaDeItens[props.description].description}</li>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Modal;