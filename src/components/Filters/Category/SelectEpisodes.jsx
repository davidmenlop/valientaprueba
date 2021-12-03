import React from "react";

const SelectEpisodes = ({total, name, setId}) => {

  return (
    <div className="input-group mb-3">
      <select onChange={e=>setId(e.target.value)} class="form-select" aria-label="Default select example" id={name}>
        <option selected>Select One</option>
        {[...Array(total).keys()].map(x=>{
            return <option value={x+1}>{name} - {x+1}</option>
        })}
      </select>
    </div>
  );
};

export default SelectEpisodes;
