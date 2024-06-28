import React from "react";

function Modal(props) {

  const { itemClicado, setMostraModal } = props
  return (
    <div
      onClick={() => setMostraModal(false)}
      className="bg-[#00000099] fixed top-0 bottom-0 right-0 left-0 z-50">
      <div className='w-[700px] h-[370px] bg-[#cccccccc] rounded-[5px] text-black text-[500] fixed top-1/2 right-1/2 translate-x-[50%] translate-y-[-50%]'
        onClick={(e) => { e.stopPropagation() }}>
        <div className="h-[25px] flex justify-end">
          <button
            className="p-[5px] flex justify-center items-center text-[25px] border-none cursor-pointer bg-[#cccccc00] rounded-[5px]"
            onClick={() => setMostraModal(false)}>
            x
          </button>
        </div>
        <h1 className="text-[30px] text-center font-[600]">
          {itemClicado.name}
        </h1>
        <div className="flex p-[10px]">
          <div className="" >
            <img className="w-[200px] h-[200px]" src={itemClicado.image} alt="" />
          </div>
          <div className="w-[480px] py-[15px] px-[10px]">
            <li>{itemClicado.custo}</li>
            <li>{itemClicado.status}</li>
            <li>{itemClicado.description}</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;