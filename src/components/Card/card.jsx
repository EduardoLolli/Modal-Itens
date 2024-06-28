import React, { useState } from "react";
import listaDeItens from "../ArrayLista/lista";
import Modal from "../Modal/modal";


function Card(props) {
  const { objItens } = props
  const [mostraModal, setMostraModal] = useState(false);
  return (
    <div className="m-[50px] w-[250px] h-[450px] bg-[#0c0c3a] text-white border border-[#fdd360]">
      <div>
        <h2 className="flex items-center justify-center text-center h-[90px] px-[15px] py-[5px] text-[28px]">
          {objItens.name}
        </h2>
      </div>
      <div className="flex">
        <img className="w-[160px] text-center my-0 mx-auto border-[3px] border-black" src={objItens?.image} alt="" />
      </div>
      <div className="card-info">
        <li>Custo: {objItens?.custo}</li>
        <li>{objItens?.status}</li>
        {objItens?.description.length > 52 ?
          <li>
            {objItens?.description.slice(0, 52)}
            <p
              className="text-[#7ee8f0] cursor-pointer"
              onClick={() => setMostraModal(true)} >
              ...ver mais
            </p>
          </li> :
          <li>
            {objItens?.description.slice(0, 52)}
          </li>}
      </div>
      {mostraModal === true ? <Modal
        setMostraModal={setMostraModal}
        itemClicado={objItens}
      /> : null}

    </div >
  )
}

export default Card;