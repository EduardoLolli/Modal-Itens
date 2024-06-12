import React from "react";
import listaDeItens from "./lista";
import ItemList from "./data";

function Card(props) {

    let indice = 3;
    console.log(props)
    return (


        <div className="card">

            <div className="card-title-div">
                <h2>{listaDeItens[props.id]?.name}</h2>
            </div>

            <div className="card-img-div">
                <img src={listaDeItens[props.id]?.image} alt="" />
            </div>

            <div className="card-info">
                <li>{listaDeItens[props.id]?.custo}</li>
                <li>{listaDeItens[props.id]?.status}</li>
                {listaDeItens[props.id]?.description.length > 52 ?
                    <li>{listaDeItens[props.id]?.description.slice(0, 52)}<p className="modal-button">...ver mais</p></li> :
                    <li>{listaDeItens[props.id]?.description.slice(0, 52)}</li>}

            </div>



        </div >
    )


}

export default Card;