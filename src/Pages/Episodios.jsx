import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards/Cards.jsx";
import SelectEpisodes from "../components/Filters/Category/SelectEpisodes";

const Episodios = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await axios.get(api);
      let dav = data.data;
      setInfo(dav);

      let a = await Promise.all(
        dav.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          Episode:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>{" "}
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Episodes</h4>

          <SelectEpisodes setId={setId} total={51} name="Episode" />
        </div>
      
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodios;
