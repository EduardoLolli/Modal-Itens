import React from "react";
import listaDeItens from "./lista";

function Card(props) {

    let indice = 0;

    return (


        <div className="card">

            <div className="card-title-div">
                <h2>{props.name}</h2>
            </div>

            <div className="card-img-div">
                <img src={props.image} alt="" />
            </div>

            <div className="card-info">
                <li>{props.custo}</li>
                <li>{props.status}</li>
                {props.description.length > 52 ?
                    <li>{props.description.slice(0, 52)}<p className="modal-button">...ver mais</p></li> :
                    <li>{props.description.slice(0, 52)}</li>}

            </div>



        </div >
    )


}

export default Card;