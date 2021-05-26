import React, { useEffect, useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import "../css/Symptoms.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
function Symptoms() {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      <br></br>
      <h1>Search Engine</h1>
      <div className="search_field">
        <div className="search_field_sub">
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <SearchIcon style={{ fontSize: 25 }}></SearchIcon>
          </div>
          <div className="input_container">
            <input
              type="text"
              placeholder="Search Diseases here"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              className="input_search"
            ></input>
          </div>
        </div>
      </div>

      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.disease.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            {searchTerm == "" ? (
              <div></div>
            ) : (
              <div className="main_container_symptoms">
                <div className="result_main">
                  <div className="input_results_main">
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                      className="icon"
                    >
                      <SearchIcon style={{ fontSize: 19 }}></SearchIcon>
                    </div>
                    <div key={key} className="input_results">
                      <Link
                        style={{
                          color: "black",
                          textDecoration: "none",
                          height: "50px",

                          alignItems: "center",
                          display: "flex",
                        }}
                        to={`${val.index}`}
                      >
                        {val.disease}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Symptoms;
