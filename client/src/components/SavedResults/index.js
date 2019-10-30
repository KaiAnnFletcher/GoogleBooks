import React from "react";
import "./style.css";

function SavedResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          {/* <img alt="Dog" src={result} className="img-fluid" /> */}
          <div> {result} </div>
        </li>
      ))}
    </ul>
  );
}

export default SavedResults;