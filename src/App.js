import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Filters from "./components/Filters/Filters.jsx";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination.jsx";
import Search from "./components/Search/Search.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodios from "./Pages/Episodios";
import Ubicaciones from "./Pages/Ubicaciones";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/episodes' element={<Episodios />}/>
        <Route path='/locations' element={<Ubicaciones />}/>
      </Routes>

    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [axiosData, setData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");

  let { info, results } = axiosData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;
 

  useEffect(() => {
    (async function () {
      let data = await axios.get(api);
      let dav = data.data;
      setData(dav);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info}
      />
    </div>
  );
};

export default App;
