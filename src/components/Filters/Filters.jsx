import React from "react";
import Gender from "./Category/Gender.jsx";
import Status from "./Category/Status.jsx";

const Filters = ({setStatus, setPageNumber, setGender}) => {

  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
  }

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filtros</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Limpiar Filtro
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
      </div>
    </div>
  );
};

export default Filters;
