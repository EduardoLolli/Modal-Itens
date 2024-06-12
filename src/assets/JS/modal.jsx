import React from "react";
import listaDeItens from "./lista";
import ItemList from "./data";

function Modal(props) {


  return (

    <div onClick={props.close} className="modal-background">
      <div className='modal' onClick={(e) => { e.stopPropagation() }}>

        <div className="modal-header">
          <button onClick={props.close}>x</button>
        </div>

        <h1>{props.name}</h1>

        <div className="modal-content">

          <div><img src={props.image} alt="" /></div>

          <div className="modal-content-info">
            <li>{props.custo}</li>
            <li>{props.status}</li>
            <li>{props.description}</li>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Modal;